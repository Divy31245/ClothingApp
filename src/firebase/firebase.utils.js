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

  export const createUserProfileDocument = async (userAuth,addtionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData
        })
      } catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }
  
  
  
  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;


