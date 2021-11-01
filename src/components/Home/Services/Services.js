import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

//Data load from server then mapping 
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://macabre-dracula-42260.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {services.length === 0 ?
                // <!-- Spinner -->
                <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
                :
                <div className="mx-8">
                    <h2 className="text-purple-900 font-bold text-6xl tracking-tight mb-14">Our Services
                        <hr />
                    </h2>
                    <div className="grid grid-cols-3 gap-4">

                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>}
        </div>

    );
};

export default Services;