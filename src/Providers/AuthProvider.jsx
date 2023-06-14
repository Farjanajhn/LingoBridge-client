import { useState } from "react";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import axios from "axios";


export const AuthContext = createContext(null)
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  }
  
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user', currentUser)

      //get and set token
      if (user)
      {
        axios.post('http://localhost:3000/jwt', {
        email:currentUser?.email
        })
          .then(data => {
        /*     console.log(data.data.token); */
            localStorage.setItem('access-token',data.data.token)
        })
      }
      else {
        localStorage.removeItem('access-token')
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  },[user])
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn 
  }

  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
   </AuthContext.Provider>
  );
};

export default AuthProvider;