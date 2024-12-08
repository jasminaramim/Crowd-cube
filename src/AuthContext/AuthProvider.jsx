import React, { createContext, useContext, useEffect, useState } from 'react';  
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config'; // Import the auth from the correct config file

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext); 
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider); // auth here refers to the imported auth instance
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    googleLogin,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
