import React, {createContext, useContext, useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {firebaseAuth} from '../firebase';
import {netlifyIdentity} from '../netlify';

export const AuthContext = createContext({});
const AuthProvider = ({children}) => {
    const [firebaseUser, setFirebaseUser] = useState();
    const [netlifyUser, setNetlifyUser] = useState();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            console.log('onAuthStateChanged', user);
            console.log('email', user?.email);
            setFirebaseUser(user);
        });

        if (netlifyIdentity.currentUser()) {
            console.log('setNetlifyUser', netlifyIdentity.currentUser());
            setNetlifyUser(netlifyIdentity.currentUser());
        }
    }, []);

    return (
        <AuthContext.Provider value={{firebaseUser, setFirebaseUser, netlifyUser, setNetlifyUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
