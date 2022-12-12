import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "@firebase/firestore";
import "firebase/auth";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB_ZB9JQewnuBEicPuFkBVSAu8lPQv44dQ",
  authDomain: "sneakylegs-39b0e.firebaseapp.com",
  projectId: "sneakylegs-39b0e",
  storageBucket: "sneakylegs-39b0e.appspot.com",
  messagingSenderId: "869636022371",
  appId: "1:869636022371:web:22f3e99736d630c030d856",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
