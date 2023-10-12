// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import{getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApnEw0EgrIRQVxdZ4Myha5FuyWIhxQZMQ",
  authDomain: "imagegen-81d70.firebaseapp.com",
  projectId: "imagegen-81d70",
  storageBucket: "imagegen-81d70.appspot.com",
  messagingSenderId: "576285757387",
  appId: "1:576285757387:web:f664f00c5395599e74b04e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();

const db =getFirestore(app);

const storage = getStorage(app);

const API_TOKEN = "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";

export {Auth,Provider,db,storage,API_TOKEN };