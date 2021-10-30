import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mx-8">
            <h2 className="text-purple-900 font-bold text-6xl tracking-tight mb-14">Our Services</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    services.map(service => <Service
                        key={services.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;