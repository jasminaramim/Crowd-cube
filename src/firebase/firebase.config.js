
// Import the functions you need from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqKBidrI63OnioZpQl34NhQ3_Wp8R1s-g",
  authDomain: "crowd-cube-website.firebaseapp.com",
  projectId: "crowd-cube-website",
  storageBucket: "crowd-cube-website.firebasestorage.app",
  messagingSenderId: "214979002710",
  appId: "1:214979002710:web:c5cdb8fb0a3a4f4ed656f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Export additional Firebase functionalities (if needed)
export { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup };

// Default export
export default {app,db,auth};
