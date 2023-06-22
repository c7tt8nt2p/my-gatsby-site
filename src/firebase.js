import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

let app;
let firebaseAuth;

if (typeof window !== 'undefined') {
  app = app || initializeApp(firebaseConfig);
  firebaseAuth = getAuth(app);
}

export { firebaseAuth };
