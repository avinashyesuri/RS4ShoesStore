// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxrg_C45VUcIai9fgoeSD07HqHKkR01TQ",
  authDomain: "shoestore-9731f.firebaseapp.com",
  projectId: "shoestore-9731f",
  storageBucket: "shoestore-9731f.appspot.com",
  messagingSenderId: "317018130832",
  appId: "1:317018130832:web:6fc65529e0183c01b58b15",
  measurementId: "G-SCV9CFPDN3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app); // Initialize Firestore