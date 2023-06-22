import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase';

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log('onAuthStateChanged', user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
