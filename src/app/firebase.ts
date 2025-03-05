import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported, Analytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics: Analytics;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics();
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
  }
});

const trackEvent = (eventName: string, eventParams?: Record<string, string>) => {
  logEvent(analytics, eventName, eventParams);
};

export { analytics, app, trackEvent };
