/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const Authcontext=createContext();
const auth = getAuth(app);
const Authprovider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const authinfo={

    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;