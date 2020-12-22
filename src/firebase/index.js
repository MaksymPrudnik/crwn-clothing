import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import config from "../config";

export const pushDataToFirestore = async (collectionName, data) => {
  const collectionRef = firestore.collection(collectionName);

  const batch = firestore.batch();
  Object.keys(data).forEach((name) => {
    const newDocRef = collectionRef.doc(name);
    batch.set(newDocRef, data[name]);
  });

  return await batch.commit();
};

export const createUserProfileDoc = async (user, additionalData) => {
  if (!user) {
    console.error("User object was not passed");
    return;
  } else {
    const userRef = firestore.doc(`users/${user.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { displayName, email } = user;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.error(error.message || error);
      }
    }
    return userRef;
  }
};

firebase.initializeApp(config.firebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
