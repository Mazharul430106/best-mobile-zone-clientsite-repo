import React from 'react';
import {createContext} from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const user = {
        name : 'mazharul Islam',
        email: 'mazharul@gmail.com'
    }

    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;