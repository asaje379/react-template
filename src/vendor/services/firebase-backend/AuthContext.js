import React, { useCallback } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { auth, registerSW } from './firebase.config';
import { useDatabase } from './DatabaseContext';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({
    children
}) {

    const [currentUser, setCurrentUser] = useState(null);
    const { one, save } = useDatabase();

    async function login(email, password) {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            return true;
        } catch (e) {
            return { err: e.message }
        }
    }

    async function register(data) {
        const credential = await auth.createUserWithEmailAndPassword(data.username + '@atcib.bj', data.password);
        const user = { ...data, uid: credential.user.uid };
        delete user.password;
        return user;
    }

    useEffect(() => {
        const sub = auth.onAuthStateChanged(user => {
            if (user) {
                getUser(user.uid);
            }
        });

        return sub;
    }, []);

    const getUser = useCallback(
        (uid) => {
            const cb = async () => {
                const user = await one('users', uid, 'uid');
                const user_token = await registerSW();
                if (!user.msgTokens) {
                    user.msgTokens = [];
                }
                if (!user.msgTokens.includes(user_token)) {
                    user.msgTokens = [...user.msgTokens, user_token];
                }
                setCurrentUser(JSON.parse(JSON.stringify(user)));
                sessionStorage.setItem('atc-ib-user-token', user_token);
                await save('users', user, user.id);
            };
            cb();
        },
        [currentUser],
    );

    async function logout() {
        await save('connexions', {
            user: currentUser,
            at: Date.now(),
            action: 'logout'
        });
        await auth.signOut();
    }

    return (
        <AuthContext.Provider value={{
            currentUser,
            login,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
