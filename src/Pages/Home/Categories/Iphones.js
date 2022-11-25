
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DisplayIphones from './DisplayIphones';
const Iphones = () => {

    const {data: iPhones = []} = useQuery({
        queryKey: ['phones'],
        queryFn: ()=> fetch(`http://localhost:5000/phones?phoneType=iPhone`)
        .then(res=> res.json())
    })

    return (
        <div>
            <div className='w-[95%] mx-auto'>
                <h2 className='text-3xl font-semibold'>iPhones</h2>
                <div className='grid w-full lg:grid-cols-3 gap-10 py-5 pb-10'>
                    {
                        iPhones.map(iphone=> <DisplayIphones key={iphone._id} iphone={iphone}></DisplayIphones>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Iphones;