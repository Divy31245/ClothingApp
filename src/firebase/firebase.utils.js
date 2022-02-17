import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAOs1JAw2rjiCcLSdfxspjjaVa32tbrHvA",
    authDomain: "crownclothingapp.firebaseapp.com",
    projectId: "crownclothingapp",
    storageBucket: "crownclothingapp.appspot.com",
    messagingSenderId: "558317931173",
    appId: "1:558317931173:web:baa37defb209679f9c9b4c",
    measurementId: "G-P4JZV7QJQD"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;


