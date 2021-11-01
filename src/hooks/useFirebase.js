import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initilizeAuthentication from "../Firebase/firebase.init";

// call initilizeAuthentication page 
initilizeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // setting google sign in 
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // setting logout 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser('')

            })
    }
    // Tracked sign in & sign out 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;