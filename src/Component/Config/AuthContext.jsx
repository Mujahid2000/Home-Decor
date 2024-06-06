import  { createContext, useEffect, useState } from 'react';
import { app } from './firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';


export const AuthContext = createContext(null);
const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Set loading to false after the user state is updated
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.error("Error creating user:", error);
        setLoading(false); // Reset loading state on error
        throw error;
      });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false)); // Ensure loading state is reset
  };

  const handleUpdateProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    }).finally(() => setLoading(false));
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() => setLoading(false));
  };

  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider).finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    handleUpdateProfile,
    setLoading,
    googleLogin,
    facebookLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
