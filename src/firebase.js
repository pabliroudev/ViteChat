import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7wmq6EaqaL1PCDQ3MCR85K26BmwIpFm4",
  authDomain: "firechat-80d4d.firebaseapp.com",
  projectId: "firechat-80d4d",
  storageBucket: "firechat-80d4d.appspot.com",
  messagingSenderId: "841958457888",
  appId: "1:841958457888:web:dc3cfb351c2d22a9a9f245",
  measurementId: "G-8QXMSZ8B4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);