import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import DisplayOrders from './DisplayOrders';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [myOrders, setmyOrders] = useState([]);
    console.log(myOrders);

    useEffect(() => {
        fetch(`http://localhost:5000/bookingPhones?email=${user?.email}`)
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            setmyOrders(data)
        })
        .catch(error=> {
            console.log(error)
        })

    },[user?.email])



    return (
        <div>
           <div className='grid lg:grid-cols-3 gap-10 py-5 pb-10'>
                {
                    myOrders?.map(myOrder=> <DisplayOrders key={myOrder._id} myOrder={myOrder}></DisplayOrders> )
                }
           </div>
        </div>
    );
};

export default MyOrders;