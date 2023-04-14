import React from 'react';

const DisplayShowReview = ({ singleReview }) => {
    const { name, url, review } = singleReview;
    return (
        <div className="card w-full bg-base-100 rounded ">
            <figure><img src={url} className='w-[250px] h-[250px] rounded-full' alt="Shoes" /></figure>
            <div className="card-body">
                <div className='text-center xl:max-w-[700px] lg:max-w-[700px] md:max-w-[700px] w-full mx-auto '>
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className='text-[20px] leading-8'>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayShowReview;