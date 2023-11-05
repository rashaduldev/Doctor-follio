/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const Authcontext=createContext();
const auth = getAuth(app);
const Authprovider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
   
    const createuser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout=()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser)
            console.log(currentuser)
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authinfo={
        user,
        loading,
        createuser,
        signin,
        Logout,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;