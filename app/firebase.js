// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQLaSF7qRAR7VCEAt8pcs0QpdxbUqjZIM",
  authDomain: "inventory-management-b717b.firebaseapp.com",
  projectId: "inventory-management-b717b",
  storageBucket: "inventory-management-b717b.appspot.com",
  messagingSenderId: "167646967712",
  appId: "1:167646967712:web:b7748b5e7d96e2d1f316c5",
  measurementId: "G-JCCDP740E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};
