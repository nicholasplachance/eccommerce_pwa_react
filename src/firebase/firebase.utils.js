import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCr1zawwcXHO0HvWnCl3o4GimgXkPxsZpA",
  authDomain: "react-clothing-shop-c64dc.firebaseapp.com",
  projectId: "react-clothing-shop-c64dc",
  storageBucket: "react-clothing-shop-c64dc.appspot.com",
  messagingSenderId: "508382467125",
  appId: "1:508382467125:web:1251873f1134f912704d7c",
  measurementId: "G-4RETE2C39F",
};

// grabs users auth id in database

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

//export auth for anywhere it needs to be used
export const auth = firebase.auth();

//export firestore for ability to be used in app
export const firestore = firebase.firestore();

// access to google auth
const provider = new firebase.auth.GoogleAuthProvider();

// always triggest google pop for auth provider for sign in and authentication
provider.setCustomParameters({ prompt: "select_account" });

// only use sign in with google instead of other options, -twitch, twitter, facebook
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
