import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCategories = ({ category }) => {
    //  console.log(category)
   const {name, image, phoneType} = category;

    return (
        <div className="card card-compact w-full bg-base-100 rounded shadow-xl">
            <figure><img src={image} className=" h-80  w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions pb-3">
                    <Link to={`${phoneType}`} className="btn btn-primary w-full text-white">See All Phones</Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayCategories;