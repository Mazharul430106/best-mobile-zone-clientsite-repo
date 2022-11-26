import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DisplayButtonPhones from './DisplayButtonPhones';

const AllButtonPhones = () => {
    const { data: buttonPhones = [] } = useQuery({
        queryKey: ['phones'],
        queryFn: () => fetch(`http://localhost:5000/phones?phoneType=ButtonPhone`)
            .then(res => res.json())
    })

    return (
        <div className='w-[95%] mx-auto'>
            <h2 className='text-3xl font-semibold'>Button Phones</h2>
            <div className='grid w-full lg:grid-cols-3 gap-10 py-5 pb-10'>
                {
                    buttonPhones?.map(buttonPhone => <DisplayButtonPhones
                        key={buttonPhone._id}
                        buttonPhone={buttonPhone}
                    >
                    </DisplayButtonPhones>)
                }
            </div>

        </div>
    );
};

export default AllButtonPhones;

