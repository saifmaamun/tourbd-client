import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

// initialize Authentication
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();





const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const auth = getAuth();



// google sign in
    const googleProvider = new GoogleAuthProvider();

    const signinUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
            setUser({})
            })
            .finally(() => setIsLoading(false))
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        });

        return () => unsubscribed;
    }, [])

    // returning 

    return {
        auth,
        user,
        error,
        logOut,
        signinUsingGoogle,
        isLoading
    }
}

export default useFirebase;






