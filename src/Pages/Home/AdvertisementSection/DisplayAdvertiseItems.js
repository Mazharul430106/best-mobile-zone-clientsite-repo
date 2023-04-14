import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const DisplayAdvertiseItems = ({ advertiseItem, refetch,  }) => {
    const { setModalData } = useContext(AuthContext);
    // console.log(user)

    const { name, image, location, Orignal_Price, Resel_Price, Posted_Time, Seller_Name, Year_Of_Use, _id } = advertiseItem;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl rounded ">
            <figure><img src={image} className=" h-80  w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <div className='flex justify-between'>
                        <span style={{ fontSize: '15px' }}>Seller Name:{Seller_Name}</span>
                        <span style={{ fontSize: '15px' }}>Location: {location}</span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span style={{ fontSize: '15px' }}>Orignal Price: {Orignal_Price} Tk</span>
                        <span style={{ fontSize: '15px' }}>Resel Price : {Resel_Price} Tk</span>
                    </div>
                    <div className='flex justify-between mb-2'>
                        <span style={{ fontSize: '15px' }}>Time {Posted_Time}</span>
                        <span style={{ fontSize: '15px' }}>Use of Year : {Year_Of_Use}</span>
                    </div>
                </div>
                <div className=" pb-3">
                    <label onClick={()=>setModalData(advertiseItem)} htmlFor="booking-modal" className="btn btn-primary w-full text-white"> Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default DisplayAdvertiseItems;