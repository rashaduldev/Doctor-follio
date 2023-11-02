import { Link } from 'react-router-dom';
import img from '../../assets/logo.svg'
import { useContext } from 'react';
import { Authcontext } from '../../Provider/Authprovider';

const Navber = () => {

  const {user , Logout}=useContext(Authcontext);

  const handleLogout=()=>{
    Logout()
    .then(res=>{
      console.log(res);
    })
    .catch(err=>console.log(err))
  }
  const Navitems = (
    <>
      <li><a><Link to={'/'}>Home</Link></a></li>
      <li><a><Link to={'/about'}>About</Link></a></li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {Navitems}
          </ul>
        </div>
        <img src={img} alt="" />
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {Navitems}
        </ul>
      </div>
      <div className="navbar-end">
        {user? <>
          <button onClick={handleLogout} className="btn btn-outline btn-warning"><Link to={'/login'}>LogOut</Link></button>
          <p><Link to={'/booking'}>My Bookings</Link></p>
        </>
       : <button className="btn btn-outline btn-warning"><Link to={'/login'}>Login</Link></button>}
        {/* <button className="btn btn-outline btn-warning"><Link to={'/login'}>Log Out</Link></button> */}
      </div>
    </div>
  );
};

export default Navber;
