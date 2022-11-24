import React from 'react';

const DisplayCategories = ({ category }) => {
   const {name, image} = category;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={image} className=" h-80  w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full text-white">See All Phones</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayCategories;