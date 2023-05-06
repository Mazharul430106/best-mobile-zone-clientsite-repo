import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './OurTeam.css';

const DisplayOurTeam = ({ singleTeam }) => {
    const { name, title, img } = singleTeam;
    return (
        <div className="card cardDiv card-compact w-full rounded relative">
            <div className='overlay'>
                <img src={img} className='' alt="Shoes" />
            </div>
            <div className="text-center">
                <h3 className='text-xl mt-3 font-semibold uppercase'>{name}</h3>
                <h2 className="text-xl mt-2 mb-4 text-gray-400 font-semibold">{title}</h2>
            </div>
            <div className='socialLinks'>
                <Link className='bg-white-400 hover:bg-white hover:text-black text-white'>
                    <div className='border w-[40px] h-[40px] flex justify-center items-center '>
                        <FaFacebookF ></FaFacebookF>
                    </div>
                </Link>
                <Link className='bg-white-400 hover:bg-white hover:text-black text-white'>
                    <div className='border w-[40px] h-[40px] flex justify-center items-center '>
                        <FaTwitter></FaTwitter>
                    </div>
                </Link>
                <Link className='bg-white-400 hover:bg-white hover:text-black text-white'>
                    <div className='border w-[40px] h-[40px] flex justify-center items-center '>
                        <FaInstagram></FaInstagram>
                    </div>
                </Link>
                <Link className='bg-white-400 hover:bg-white hover:text-black text-white'>
                    <div className='border w-[40px] h-[40px] flex justify-center items-center '>
                        <FaLinkedinIn></FaLinkedinIn>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DisplayOurTeam;