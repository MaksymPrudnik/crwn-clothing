import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const requireReactEnvVar = (name) => {
  const envVar = process.env[`REACT_APP_${name}`];
  if (!envVar) {
    throw new Error(`Failed to import environment variable - ${name}`);
  }
  return envVar;
};

const config = {
  apiKey: requireReactEnvVar("FIREBASE_API_KEY"),
  authDomain: requireReactEnvVar("FIREBASE_AUTH_DOMAIN"),
  projectId: requireReactEnvVar("FIREBASE_PROJECT_ID"),
  storageBucket: requireReactEnvVar("FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: requireReactEnvVar("FIREBASE_MESSAGING_SENDER_ID"),
  appId: requireReactEnvVar("FIREBASE_APP_ID"),
  measurementId: requireReactEnvVar("FIREBASE_MEASUREMENT_ID"),
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
