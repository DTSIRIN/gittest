// App logic.
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    // var displayName = user.displayName;
    var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;

    console.log(email);
    doc.querySelector('#myNavigator').replacePage('tabs.html');
  } else {
    doc.querySelector('#myNavigator').replacePage('views/signin.html');
  }
});



doc.addEventListener('init', function (event) {
  var page = event.target;
  console.log(page.id);

  doc.getElementById("signout").onclick = function () {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
  }


  if (page.id === "home") {
    db.collection("movies").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var item = `<ons-carousel-item>
        <div style="text-align: center;">
          <img src="${doc.data().posterURL}" style="width:100%;">
        </div>
      </ons-carousel-item>`
        var onsItem = doc.createElement('ons-carousel-item');
        onsItem.innerHTML = item;
        page.querySelector('#carousel').appendChild(onsItem);
      });
    });

  }

  if (page.id === "signin") {
    doc.getElementById("signinbutton").onclick = function () {
      var username = doc.querySelector("#username").value;
      var password = doc.querySelector("#password").value;
      console.log(username, password);

      firebase.auth().signInWithEmailAndPassword(username, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        doc.querySelector("#error").innerHTML = errorMessage;
      });
    }

    doc.getElementById("signingoogle").onclick = function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    }
  }


});