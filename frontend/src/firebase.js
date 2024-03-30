// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.VITE_FIREBASE_KEY);

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_KEY,
  authDomain: "project0-9e848.firebaseapp.com",
  projectId: "project0-9e848",
  storageBucket: "project0-9e848.appspot.com",
  messagingSenderId: "508212132479",
  appId: "1:508212132479:web:09147eba8718f2f622dd4a",
  measurementId: "G-E6TN5Z0FS7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);