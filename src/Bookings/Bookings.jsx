import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import Bookingrow from "./Bookingrow";
import axios from "axios";


const Bookings = () => {
    // eslint-disable-next-line no-unused-vars
    const {user,loading}=useContext(Authcontext);
    const [bookings,setBookings]=useState([]);

    const url=`http://localhost:3000/bookings?email=${user.email}`;
    useEffect(()=>{
      axios.get(url,{withCredentials:true})
      .then(res=>{
        setBookings(res.data)
      })
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>setBookings(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div>
            <h1>Booking length:{bookings.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=><Bookingrow booking={booking} key={user._id}></Bookingrow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Bookings;