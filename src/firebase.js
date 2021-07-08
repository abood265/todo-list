import firebase from "firebase/app";
require("firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyAUOY8RDUQiDcqioQQABfEQH4u3xCrfcVQ",
    authDomain: "todo-list-e11d9.firebaseapp.com",
    projectId: "todo-list-e11d9",
    storageBucket: "todo-list-e11d9.appspot.com",
    messagingSenderId: "817091038962",
    appId: "1:817091038962:web:d5ac7d0ac509cc8bfa0a6b"
  };
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore()
  export {firebase, db as default}