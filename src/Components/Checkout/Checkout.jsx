
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id,price,img} = service;
  const {user}=useContext(Authcontext)

  const handleService=(e)=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const date=form.date.value;
    const email=user?.email;
    const prices=user?.prices;
    console.log(name,date,email,prices)
    const booking={
      service_id:_id,
      serviceTitle:title,
      CustomerName:name,
      date,
      email,
      img
       
    }
    console.log(booking)
    fetch('http://localhost:3000/bookings', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking),
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })

  }
  return (
    <div>
      <h2 className="text-center text-4xl my-6">Check out services;{title}</h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleService} className="card-body grid grid-cols-1 md:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayname}
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
            
              </div>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
            
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Prices</span>
                </label>
                <input
                  type="text"
                  name="prices"
                  defaultValue={'$'+price}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Order Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
