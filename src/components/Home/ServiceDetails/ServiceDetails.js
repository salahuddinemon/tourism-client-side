import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`https://macabre-dracula-42260.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    // const serviceDatailInfo = services.filter(service => service._id === serviceId);

    return (
        <div>
            <h3>{serviceId}</h3>
            <h2>{service.packageName}</h2>
            {/* <h2>{serviceDatailInfo[0]?.packageName}</h2> */}
        </div>
    );
};

export default ServiceDetails;