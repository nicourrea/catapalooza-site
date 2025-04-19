// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPf7yYWc2HWqQUXSorKBvjhZc_mvgsapw",
  authDomain: "catapalooza-site.firebaseapp.com",
  projectId: "catapalooza-site",
  storageBucket: "catapalooza-site.firebasestorage.app", // ✅ updated here
  messagingSenderId: "96909395965",
  appId: "1:96909395965:web:e129bf2f7df278b284f454",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };