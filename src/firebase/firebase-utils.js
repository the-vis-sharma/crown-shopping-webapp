import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD7oGbOz4-T27KJlaCIwC6F4_oZxp8gsLs",
  authDomain: "crown-shopping-app-4579b.firebaseapp.com",
  projectId: "crown-shopping-app-4579b",
  storageBucket: "crown-shopping-app-4579b.appspot.com",
  messagingSenderId: "103381063771",
  appId: "1:103381063771:web:91897abc0565b4d2c0877e",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
