import React from 'react';
import toast from 'react-hot-toast';

const DisplayAdvertiseItems = ({ advertiseItem, refetch }) => {
    const { name, image, location, Orignal_Price, Resel_Price, Posted_Time, Seller_Name, Year_Of_Use } = advertiseItem;

    const handleDeleteAdvertise = (advertiseItem) => {

        fetch(`https://best-mobile-zone-server.vercel.app/advertise/${advertiseItem._id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Advertise Successfully Deleted');
                    refetch();
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
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
                <div className="card-actions pb-3">
                    <div className='flex'>
                        <span className="btn btn-primary text-white">pay for user</span>
                        <span onClick={() => handleDeleteAdvertise(advertiseItem)} className="btn btn-primary ml-40 text-white">Delete for seller</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayAdvertiseItems;