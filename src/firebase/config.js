import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBXK6CWHPSlji_oTJnmll1Hilhvijzd_XQ",
  authDomain: "acm-ecommerce.firebaseapp.com",
  projectId: "acm-ecommerce",
  storageBucket: "acm-ecommerce.firebasestorage.app",
  messagingSenderId: "1045173261151",
  appId: "1:1045173261151:web:8a9776f6f2cc65e80d1cea",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
