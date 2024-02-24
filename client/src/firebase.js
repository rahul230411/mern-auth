// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f3149.firebaseapp.com",
  projectId: "mern-auth-f3149",
  storageBucket: "mern-auth-f3149.appspot.com",
  messagingSenderId: "886939220763",
  appId: "1:886939220763:web:021a13f87f67c6d7f8f1be",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
