
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA9-ICxwAOn5CwqQFyZ5fhquCMBPAB4djs",
  authDomain: "ikumomovie.firebaseapp.com",
  databaseURL: "https://ikumomovie.firebaseio.com",
  projectId: "ikumomovie",
  storageBucket: "ikumomovie.appspot.com",
  messagingSenderId: "659717858724",
  appId: "1:659717858724:web:0b4f29dc9396590857cd31",
  measurementId: "G-HGGJ69CRR4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
