import * as React from "react";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import Scene3D from "../components/Scene3D";

// Firebase configuration (replace with your .env values)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase app once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

interface AuthPageProps {
  isVisible: boolean;
}

export default function AuthPage({ isVisible }: AuthPageProps): React.JSX.Element {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        // Create user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // Update display name
        if (displayName) {
          await updateProfile(userCredential.user, { displayName });
        }
        setMessage("Account created successfully ✔");
      } else {
        // Login existing user
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Logged in successfully 🎉");
      }
    } catch (error: any) {
      console.error("Firebase Auth Error:", error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-neutral-900 text-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.6s ease-in-out 0.4s",
      }}
    >
      <div className="flex w-11/12 max-w-5xl h-[70vh] rounded-3xl overflow-hidden shadow-xl">
        {/* Left: Auth Form */}
        <div className="flex-1 flex flex-col items-center justify-center bg-neutral-950 p-8">
          <h1 className="text-3xl font-bold mb-4">
            {mode === "login" ? "Welcome Back" : "Create an Account"}
          </h1>

          <form onSubmit={handleSubmit} className="w-80 space-y-4">
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Full Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded bg-neutral-800 focus:outline-none"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-3 py-2 rounded bg-neutral-800 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              className="w-full px-3 py-2 rounded bg-neutral-800 focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded transition"
            >
              {loading ? "Processing..." : mode === "login" ? "Log In" : "Sign Up"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-3 text-sm ${
                message.includes("Error") ? "text-red-400" : "text-green-400"
              }`}
            >
              {message}
            </p>
          )}

          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="mt-4 text-sm text-gray-400 hover:text-white"
          >
            {mode === "login"
              ? "Don’t have an account? Sign Up"
              : "Already have an account? Log In"}
          </button>
        </div>

        {/* Right: 3D Scene */}
        <div
          className="flex-1 flex items-center justify-center relative"
          style={{ backgroundColor: "#340062" }}
        >
          <Scene3D />
        </div>
      </div>
    </div>
  );
}
