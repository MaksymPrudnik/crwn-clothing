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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
