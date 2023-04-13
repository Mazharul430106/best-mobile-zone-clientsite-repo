import React from 'react';
import DisplayOurTeam from './DisplayOurTeam';




const ourTeams = [
    {
        "name": "Margaret Grimes",
        "title": 'CEO',
        "img": "https://i.ibb.co/8xk3D4h/img4.jpg"
    },
    {
        "name": "Meega Powell",
        "title": 'PRODUCTION MANAGER',
        "img": "https://i.ibb.co/YL0BFNk/img1.jpg"
    },
    {
        "name": "Laurie Shaw",
        "title": 'QUALITY ANALYST',
        "img": "https://i.ibb.co/6wzkfjj/img2.jpg"
    },
    {
        "name": "Olivia bowers",
        "title": 'SALES EXECUTIVE',
        "img": "https://i.ibb.co/fDLQTm5/img3.jpg"
    }
]


const OurTeam = () => {
    return (
        <div className='px-[7%] '>
            <div className='text-center py-10'>
                <h1 className='text-5xl font-bold'>Our Team </h1>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    ourTeams.map(singleTeam=> <DisplayOurTeam key={singleTeam.index} singleTeam={singleTeam}></DisplayOurTeam>)
                }
            </div>
        </div>
    );
};

export default OurTeam;