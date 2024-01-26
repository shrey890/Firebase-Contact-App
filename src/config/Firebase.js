// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS3hYOzbeJxSLXV1JpA1jDdsCd5D8UqrI",
  authDomain: "react-contact-212bd.firebaseapp.com",
  projectId: "react-contact-212bd",
  storageBucket: "react-contact-212bd.appspot.com",
  messagingSenderId: "489932516412",
  appId: "1:489932516412:web:a6b7221a25fd8304276739"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)