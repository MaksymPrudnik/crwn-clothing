const requireReactEnvVar = (name) => {
  const envVar = process.env[`REACT_APP_${name}`];
  if (!envVar) {
    throw new Error(
      process.env.NODE_ENV !== "production"
        ? `Failed to import environment variable - ${name}`
        : "Error loading environmental variables"
    );
  }
  return envVar;
};

const config = {
  firebase: {
    apiKey: requireReactEnvVar("FIREBASE_API_KEY"),
    authDomain: requireReactEnvVar("FIREBASE_AUTH_DOMAIN"),
    projectId: requireReactEnvVar("FIREBASE_PROJECT_ID"),
    storageBucket: requireReactEnvVar("FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: requireReactEnvVar("FIREBASE_MESSAGING_SENDER_ID"),
    appId: requireReactEnvVar("FIREBASE_APP_ID"),
    measurementId: requireReactEnvVar("FIREBASE_MEASUREMENT_ID"),
  },
  stripe: {
    publishableKey: requireReactEnvVar("STRIPE_PUBLISHABLE_KEY"),
  },
};

export default config;
