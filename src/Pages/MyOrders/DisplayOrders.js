import React from 'react';

const DisplayOrders = ({ myOrder }) => {
    const {name,email, productImage,itemName, orignalPrice, reselPrice} = myOrder;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={productImage} className=" h-80  w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{itemName}</h2>
                <div>
                    <p className='font-semibold'>Name: {name}</p>
                    <p className='font-semibold'>Email: {email}</p>
                    <p className='font-semibold'>Original Price : {orignalPrice}</p>
                    <p className='font-semibold'>Resel Price : {reselPrice}</p>
            
                </div>
                <div className="card-actions pb-3">
                    <label className="btn btn-primary w-full text-white">pay</label>
                </div>
            </div>
        </div>
    );
};

export default DisplayOrders;

