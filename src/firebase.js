// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";

// ✅ This is the correct Firebase config — using firebasestorage.app!
const firebaseConfig = {
  apiKey: "AIzaSyDPF7yYWczHWqQUXSorKBvjhZc_mvgsapw",
  authDomain: "catapalooza-site.firebaseapp.com",
  projectId: "catapalooza-site",
  storageBucket: "catapalooza-site.firebasestorage.app", // ✅ FIXED HERE
  messagingSenderId: "96990395965",
  appId: "1:96990395965:web:e129bf2f7df278b284f454",
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Set up services
const storage = getStorage(app);       // Storage (for cat image uploads)
const auth = getAuth(app);             // Auth (for login/permissions)
const db = initializeFirestore(app, {  // Firestore DB (for cats/events)
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

export { app, storage, db, auth };