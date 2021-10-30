import React from 'react';

const Service = ({ service }) => {
    const { name, image, ship, departs, date, price } = service;

    return (
        <div className="">
            <img src={image} alt="" />
            <h1 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Packege Name: {name}</h1>
            <p>Ship: {ship}</p>
            <p>Departs: {departs}</p>
            <p>Date: {date}</p>
            <p className="font-bold text-xl">Price: ${price}</p>
            <button className="px-6 py-2 mb-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                to cart</button>
            <hr />
        </div >
    );
};

export default Service;