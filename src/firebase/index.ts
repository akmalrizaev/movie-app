// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-q53m-dTmPn9XAxWvvtbMNHOeaAP3ISM',
  authDomain: 'movie-app-90862.firebaseapp.com',
  projectId: 'movie-app-90862',
  storageBucket: 'movie-app-90862.appspot.com',
  messagingSenderId: '184210011320',
  appId: '1:184210011320:web:521b1147e851e01701704d',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
