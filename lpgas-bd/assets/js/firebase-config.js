// assets/js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuIBAaCVSx9DFxvoV87F6jUF-5kTYmxEc",
  authDomain: "lpgas-6b724.firebaseapp.com",
  projectId: "lpgas-6b724",
  storageBucket: "lpgas-6b724.firebasestorage.app",
  messagingSenderId: "447364016930",
  appId: "1:447364016930:web:23545eaac4531bd3c6137b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };