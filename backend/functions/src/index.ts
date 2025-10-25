import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import {
  getFirestore,
  FieldValue,
  //Timestamp,
} from "firebase-admin/firestore";

// Initialize the Firebase Admin SDK
admin.initializeApp();

// Get Firestore reference
const db = getFirestore();

/**
 * Trigger: When a new Firebase Authentication user is created
 * Purpose: Create a corresponding Firestore user profile document
 */
export const createUserProfile = functions.auth.user().onCreate(async (user) => {
  const { uid, email, displayName, photoURL } = user;

  // Firestore document structure
  const userDoc = {
    uid,
    email: email || null,
    displayName: displayName || null,
    photoURL: photoURL || null,
    createdAt: FieldValue.serverTimestamp(), // official server time
    goals: {},
    activityLevel: null,
    preferences: {},
  };

  try {
    await db.collection("users").doc(uid).set(userDoc);
    console.log("✅ User profile created successfully for:", uid);
  } catch (error) {
    console.error("❌ Error creating user profile:", error);
  }
});

/**
 * Optional: Trigger when user is deleted from Firebase Auth
 * Purpose: Clean up their Firestore document
 */
export const deleteUserProfile = functions.auth.user().onDelete(async (user) => {
  const { uid } = user;
  try {
    await db.collection("users").doc(uid).delete();
    console.log("🗑️ Deleted user profile for:", uid);
  } catch (error) {
    console.error("❌ Error deleting user profile:", error);
  }
});
