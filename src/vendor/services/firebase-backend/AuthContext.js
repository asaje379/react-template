import React, { useContext, useState } from 'react'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
 

export function AuthProvider() {

    const [currentUser, setCurrentUser] = useState(null);

    const value = {
        currentUser,
        login,
        register
    };

    return (
        <AuthContext.Provider value={value}>
            
        </AuthContext.Provider>
    )
}
