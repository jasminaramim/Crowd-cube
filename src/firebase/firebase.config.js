// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // import { getAuth } from "firebase/auth";
// import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAqKBidrI63OnioZpQl34NhQ3_Wp8R1s-g",
//   authDomain: "crowd-cube-website.firebaseapp.com",
//   projectId: "crowd-cube-website",
//   storageBucket: "crowd-cube-website.firebasestorage.app",
//   messagingSenderId: "214979002710",
//   appId: "1:214979002710:web:c5cdb8fb0a3a4f4ed656f7"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// export const db = getFirestore(app);
// export { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup };



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

// // Set up Google Authentication provider
// const googleProvider = new GoogleAuthProvider();

// // Get Firestore database instance
// const db = getFirestore(app);

// Export required functions
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
