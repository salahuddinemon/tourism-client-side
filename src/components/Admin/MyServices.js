import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

//Display Data that user ordered done successfully
const MyServices = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json)
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>This is MyServices</h2>
            {/* <p>{orders.length}</p> */}
        </div>
    );
};

export default MyServices;