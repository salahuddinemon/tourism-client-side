import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


//Adding Services
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://macabre-dracula-42260.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data Added Successfully')
                    reset();
                }
            })
    }
    return (
        <div className="flex justify-center items-center w-full bg-blue-400">
            <div className="w-1/2 my-36 bg-white rounded shadow-2xl p-8 m-4">
                <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add New Service</h1>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="packageName">Packege Name</label>
                        <input className="border py-2 px-3 text-grey-800" type="text"  {...register("packageName")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="journeyPlace">Place To Journey</label>
                        <input className="border py-2 px-3 text-grey-800" type="text" {...register("journeyPlace")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="journeyDays">Journey Days</label>
                        <input className="border py-2 px-3 text-grey-800" type="number" {...register("JourneyDays")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="packagePrice">Packege Price</label>
                        <input className="border py-2 px-3 text-grey-800" type="number"{...register("price")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="image">Image Link</label>
                        <input className="border py-2 px-3 text-grey-800" {...register("imageUrl")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="Date">Date</label>
                        <input className="border py-2 px-3 text-grey-800" type="date" {...register("date")} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="packageDescription">Package Description</label>
                        <textarea className="border py-2 px-3 text-grey-800" {...register("description")} ></textarea>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" for="hotels">Hotels</label>
                        <select className="border py-2 px-3 text-grey-800" {...register("hotetCategory")} >
                            <option>Standard Package(3 Star)</option>
                            <option>Superio Package(4 Star)</option>
                            <option>Premium Package (5 Star)</option>
                        </select>
                    </div>
                    <div className="text-right">
                        <button className="py-3 px-8 bg-green-400 text-white font-bold">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;