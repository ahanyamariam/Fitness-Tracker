import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

console.log("🔷 firebase.ts is loading...");
console.log("🔷 DEV mode:", import.meta.env.DEV);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
console.log("🔷 Firebase app initialized");

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("🔷 Auth and Firestore instances created");

// Connect to emulators
if (import.meta.env.DEV) {
  console.log("🔷 DEV mode detected, connecting to emulators...");
  
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
  console.log("✅ Auth Emulator connected at 127.0.0.1:9099");
  
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  console.log("✅ Firestore Emulator connected at 127.0.0.1:8080");
  
  console.log("🔥 All emulators connected successfully");
} else {
  console.log("⚠️ Production mode - using live Firebase");
}
