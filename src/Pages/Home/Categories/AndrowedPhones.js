import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DisplayAndrowedPhones from './DisplayAndrowedPhones';

const AndrowedPhones = () => {
    const { data: androwedPhones = [] } = useQuery({
        queryKey: ['phones'],
        queryFn: () => fetch(`https://best-mobile-zone-server.vercel.app/phones?phoneType=AndrowedPhone`)
            .then(res => res.json())
    })

    return (
        <div>
            <div className='w-[95%] mx-auto'>
                <h2 className='text-3xl font-semibold'>AndrowedPhones</h2>
                <div className='grid w-full lg:grid-cols-3 gap-10 py-5 pb-10'>
                    {
                        androwedPhones?.map(androwedPhone => <DisplayAndrowedPhones
                            key={androwedPhone}
                            androwedPhone={androwedPhone}
                        >
                        </DisplayAndrowedPhones>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AndrowedPhones;