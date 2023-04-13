import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='py-10'>
            <div className=' px-[7%] text-center h-[300px] bg-base-200 text-base-content '>
                <h1 className='pt-20 pb-5 text-5xl font-bold'>Newsletter</h1>
                <form className=''>
                    <input type="email" placeholder="Email" className=" input input-bordered xl:max-w-lg w-full " />
                    <button type='submit' className='btn btn-primary xl:ml-3 lg:ml-3 ml-0 mt-3 xl:max-w-[150px] w-full text-white'>Subscribe</button>
                </form>
            </div>

        </div>
    );
};

export default Newsletter;

