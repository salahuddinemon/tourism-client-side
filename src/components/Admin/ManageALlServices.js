import React, { useEffect, useState } from 'react';

// Display all users data 
const ManageALlServices = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://macabre-dracula-42260.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="flex item-center">
            <table className="table p-4 bg-white shadow rounded-lg">
                <thead>
                    <tr>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Name
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Email
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Address
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => (
                            <tr key={order._id} className="text-gray-700">
                                <td className="border-b-2 p-4 dark:border-dark-5">
                                    {order.name}
                                </td>
                                <td className="border-b-2 p-4 dark:border-dark-5">
                                    {order.email}
                                </td>
                                <td className="border-b-2 p-4 dark:border-dark-5">
                                    {order.address}
                                </td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div>
    );
};

export default ManageALlServices;