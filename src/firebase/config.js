// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeccbmv3W4L-imT3H_Q3fXO3gvX-xm358",
  authDomain: "reactnrentrega.firebaseapp.com",
  projectId: "reactnrentrega",
  storageBucket: "reactnrentrega.appspot.com",
  messagingSenderId: "824188111375",
  appId: "1:824188111375:web:287a86ec348b3ccdf5b17a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
