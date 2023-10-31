import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {_id,img,title,price}=service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className="h-64" src={img} alt={title} /></figure>
        <div className="card-body text-left">
       <div  className="flex justify-between items-center">
       <div>
        <h2 className="card-title text-3xl font-bold">{title}</h2>
          <p className="text-xl"> Price:{price}</p>
        </div>
        <div className="">
          <button className=""><Link to={`/checkout/${_id}`}>click</Link></button>
        </div>
       </div>
    
        </div>
       
      </div>
    );
};

export default Service;