/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";


const Privetroute = ({children}) => {
    const {user,loading}=useContext(Authcontext);
if (loading) {
   return <progress className="progress w-56"></progress>
}

    if (user?.email) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default Privetroute;