import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import DisplayOrders from './DisplayOrders';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [myOrders, setmyOrders] = useState([]);
    // console.log(myOrders);

    useEffect(() => {
        if(!user?.email) return;
        fetch(`https://best-mobile-zone-server.vercel.app/bookingPhones?email=${user?.email}`)
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
        <div className='px-[7%]'>
           <div className='grid lg:grid-cols-3 gap-5 py-5 pb-10'>
                {
                    myOrders?.map(myOrder=> <DisplayOrders key={myOrder._id} myOrder={myOrder}></DisplayOrders> )
                }
           </div>
        </div>
    );
};

export default MyOrders;