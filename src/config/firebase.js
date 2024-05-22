import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSw9l5dnXN0WObkIbgfbcFs9bUyfBsyKU",
  authDomain: "fir-course-4ce94.firebaseapp.com",
  projectId: "fir-course-4ce94",
  storageBucket: "fir-course-4ce94.appspot.com",
  messagingSenderId: "550037551549",
  appId: "1:550037551549:web:180c88652e9a006361fad4",
  measurementId: "G-C5W1M58R7X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
