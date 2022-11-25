import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAndrowedPhones = ({androwedPhone}) => {
    const { name, image, location, Orignal_Price, Resel_Price, Posted_Time, Seller_Name, Year_Of_Use } = androwedPhone;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={image} className=" h-80  w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className=''>
                    <div className='flex justify-between'>
                        <p style={{ fontSize: '12px' }}>Seller Name:{Seller_Name}</p>
                        <p style={{ fontSize: '12px' }}>Location: {location}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p style={{ fontSize: '12px' }}>Orignal Price: {Orignal_Price} Tk</p>
                        <p style={{ fontSize: '12px' }}>Resel Price : {Resel_Price} Tk</p>
                    </div>
                    <div className='flex justify-between'>
                        <p style={{ fontSize: '12px' }}>Time {Posted_Time}</p>
                        <p style={{ fontSize: '12px' }}>Use of Year : {Year_Of_Use}</p>
                    </div>
                </div>
                <div className="card-actions pb-3">
                    <Link to='' className="btn btn-primary w-full text-white">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayAndrowedPhones;