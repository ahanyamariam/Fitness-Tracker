import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import { getFirestore, FieldValue } from 'firebase-admin/firestore'; // Correct import for Firestore

// Initialize the Admin SDK
admin.initializeApp();
const db = getFirestore(); // Get a reference to the Firestore service

// Create a user profile when a new user is created
export const createUserProfile = functions.auth.user().onCreate(async (user) => {
  const { uid, email, displayName, photoURL } = user;

  const userDoc = {
    uid,
    email,
    displayName: displayName || null,
    photoURL: photoURL || null,
    createdAt: FieldValue.serverTimestamp(), // Use FieldValue from the new import
    goals: {},
    activityLevel: null,
    preferences: {},
  };

  try {
    await db.collection("users").doc(uid).set(userDoc);
    console.log("User profile created for:", uid);
  } catch (error) {
    console.error("Error creating user profile:", error);
  }
});
