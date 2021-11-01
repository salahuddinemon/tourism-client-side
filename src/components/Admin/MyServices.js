import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';

//Display Data that user ordered done successfully
const MyServices = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://macabre-dracula-42260.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const handleDelete = id => {
        window.confirm('Are You Sure?');
        if (true) {
            const url = `https://macabre-dracula-42260.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Successfully Deleted');
                        const remain = orders.filter(order => order._id !== id);
                        setOrders(remain);
                    }
                })
        }
    }
    return (
        <div className="container py-5">

            <table className="table p-4 bg-white shadow rounded-lg">
                <thead>
                    <tr>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            City
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Country
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Code
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Option
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.filter(order => order.email === user.email).map(item => (
                            <tr className="text-gray-700" key={item._id}>
                                <td className="border-b-2 p-4 dark:border-dark-5">{item.city}</td>
                                <td className="border-b-2 p-4 dark:border-dark-5">{item.country}</td>
                                <td className="border-b-2 p-4 dark:border-dark-5">{item.code}</td>
                                <td className="border-b-2 p-4 dark:border-dark-5"><button onClick={() => handleDelete(item._id)} className="btn btn-primary">Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};


export default MyServices;