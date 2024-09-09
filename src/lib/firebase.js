
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-41e78.firebaseapp.com",
  projectId: "reactchat-41e78",
  storageBucket: "reactchat-41e78.appspot.com",
  messagingSenderId: "505381036299",
  appId: "1:505381036299:web:aef672e78e8bcd1630820e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore()
export const storage = getStorage()