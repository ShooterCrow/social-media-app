// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJXpuRaHpEJQncfhPUpWBOPvsEssvth44",
  authDomain: "instagram-clone-4aa9e.firebaseapp.com",
  projectId: "instagram-clone-4aa9e",
  storageBucket: "instagram-clone-4aa9e.firebasestorage.app",
  messagingSenderId: "89747404659",
  appId: "1:89747404659:web:d1705517b71cdf866ab706",
  measurementId: "G-FSZT52HMPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {app, auth, storage, firestore}