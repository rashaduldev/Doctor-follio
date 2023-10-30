

const Service = ({service}) => {
    const {img,title,price}=service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className="h-64" src={img} alt={title} /></figure>
        <div className="card-body text-left">
          <h2 className="card-title text-3xl font-bold">{title}</h2>
          <p className="text-xl"> Price:{price}</p>
        </div>
      </div>
    );
};

export default Service;