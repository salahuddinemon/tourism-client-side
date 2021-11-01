import React from 'react';
import { Link } from 'react-router-dom';

//Display all our services
const Service = ({ service }) => {
    const { _id, imageUrl, packageName, journeyPlace, price, JourneyDays } = service;

    return (
        <div className="mb-20">
            <img className="h-80 w-full rounded" src={imageUrl} alt="" />
            <h1 className="text-yellow-900 font-bold text-2xl tracking-tight mb-2">{packageName} </h1>
            <p>{journeyPlace}</p>
            <p>Journey Duration: {JourneyDays} Days</p>
            <p className="font-bold text-xl text-indigo-500">Price: ${price}</p>
            <Link to={`/servicedetails/${_id}`}>
                <button className="px-6 py-2 mb-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Book Now</button>
            </Link>
            <hr />
        </div >
    );
};

export default Service;