import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Login from '../Login/Login';

//Display Service Details into Left side
const ServiceDetails = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState([]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://macabre-dracula-42260.herokuapp.com/orders', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert(' Your Booking is Successfully')
                    reset();
                }
            })
    };

    useEffect(() => {
        fetch(`https://macabre-dracula-42260.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="flex flex-row">
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-90 md:w-80 cursor-pointer ml-20">
                <div className="w-full block h-full">
                    <img alt="" src={service.imageUrl} className="max-h-40 w-full object-cover" />
                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-indigo-500 text-md font-medium">
                            ${service.price}/Per Person
                        </p>
                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            {service.packageName}
                        </p>
                        <div className="text-medium mr-2 mt-2 py-1.5 px-4 font-semibold text-gray-800 bg-blue-100 rounded-2xl">
                            {service.journeyPlace}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 font-light text-md text-justify">
                            <span className="font-medium text-gray-900 underline">Package Details :</span> <br /> {service.description}
                        </p>
                        <div className="text-medium mr-2 mt-2 py-1.5 px-4 font-semibold text-gray-800 bg-blue-100 rounded-2xl">
                            Offer Starts: {service.date}
                        </div>
                        <div className="text-medium mr-2 mt-2 py-1.5 px-4 font-semibold text-gray-800 bg-blue-100 rounded-2xl">
                            Tour Duration: {service.JourneyDays}
                        </div>
                    </div>
                </div>
            </div>

            {/* Display Order form into right side */}
            <div>
                <section className="py-1 bg-blueGray-50">
                    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                            <h6 className="text-purple-800 text-2xl mt-10 mb-8 font-bold uppercase">
                                Please Submit The To Enjoy Your Vacation
                                <hr />
                            </h6>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">


                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h6 className="text-red-800 text-medium  mb-6 font-bold uppercase">
                                        User Information
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Full Name
                                                </label>
                                                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={user.displayName}  {...register("name")} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Email address
                                                </label>
                                                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={user.email}  {...register("email")} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-blueGray-300"></hr>
                                    <h6 className="text-red-800 text-medium mt-6 mb-6 font-bold uppercase">
                                        Contact Information
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-12/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Address
                                                </label>
                                                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register("address")} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    City
                                                </label>
                                                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register("city")} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Country
                                                </label>
                                                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register("country")} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Postal Code
                                                </label>
                                                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="number" {...register("code")} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Package Name
                                                </label>
                                                <input value={service.packageName} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register("packName")} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Destination
                                                </label>
                                                <input value={service.journeyPlace} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register("destination")} />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Price (Dollar)
                                                </label>
                                                <input value={service.price} type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" {...register("price")} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-blueGray-300 mb-6" />

                                    <input type="Submit" defaultValue="Complete Order" className="bg-blue-600 py-4 px-4 text-white w-full rounded-lg font-semibold text-center focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceDetails;