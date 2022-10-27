import React from 'react';
import { createContext } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginProvider = provider => {
        return signInWithPopup(auth, provider)
    }


    const authInfo = {login, loginProvider}

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

