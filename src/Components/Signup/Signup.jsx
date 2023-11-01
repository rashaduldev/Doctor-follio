import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
const Signup = () => {

    const handlesignup=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);
    }
    return (
        <div className='mx-10 my-5'>
         <div className="hero min-h-screen bg-base-200 rounded-xl">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <div className="text-center lg:text-left">
   <img src={img} alt="" />
    </div>
    <div className="card  w-1/2  shadow-2xl bg-base-100">
      <form onSubmit={handlesignup} className="card-body">
        <h2 className='text-4xl font-bold mx-auto'>Signup Here</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Signup</button>
        </div>
        <p>Already have an account ? please <Link to={'/login'} className='text-orange-500 font-bold text-2xl ml-2'>Login</Link></p>

      </form>
    </div>
  </div>
        </div>
       </div>
    );
};

export default Signup;