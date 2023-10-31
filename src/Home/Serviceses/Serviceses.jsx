import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Serviceses = () => {
    const [sixdata,setSixdata]=useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/service')
            .then((res) => res.json())
            .then((data) => setSixdata(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <div>
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Service</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 my-7">
                    {
                        sixdata.map(service=> <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Serviceses;