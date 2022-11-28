import React from 'react';
import { toast } from 'react-hot-toast';

const DisplayProducts = ({ product }) => {
    const { name, image, location, Orignal_Price, Resel_Price, Posted_Time, Seller_Name, Year_Of_Use } = product;

    const handleAdvertiseData = (productData) => {
        const advertiseData = {
            name,
            image,
            location,
            Orignal_Price,
            Resel_Price,
            Posted_Time,
            Seller_Name,
            Year_Of_Use
        }

        fetch('https://best-mobile-zone-server.vercel.app/advertise', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertiseData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Advertise data successfully added');
                }
            })
            .catch(error => {
                console.log(error);
            })
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
                    <label onClick={() => handleAdvertiseData(product)} className="btn btn-primary w-full text-white">Advertise</label>
                </div>
            </div>
        </div>
    );
};

export default DisplayProducts;
