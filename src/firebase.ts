// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4yJYuJtteo-T0ptmCl9kQZ-P4-TGFmjc",
  authDomain: "temple-cms-management.firebaseapp.com",
  projectId: "temple-cms-management",
  storageBucket: "temple-cms-management.appspot.com",
  messagingSenderId: "728668793152",
  appId: "1:728668793152:web:1f9d947a9e03e4f68032a5",
  measurementId: "G-4HT8PSWJ44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
