import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DisplayAdvertiseItems from './DisplayAdvertiseItems';

const AdvertisementSection = () => {

    const { data: advertiseItems = [], refetch } = useQuery({
        queryKey: ['advertiseItems'],
        queryFn: () => fetch('https://best-mobile-zone-server.vercel.app/advertise')
        .then(res => res.json())
    })

    return (
        <div>
            <h1 className='text-center text-5xl font-semibold mb-5'>Our Advertisement</h1>
            <div className='w-[95%] mx-auto'>

                <div className='grid lg:grid-cols-3 gap-10 py-5 pb-10'>
                    {
                        advertiseItems.map(advertiseItem => <DisplayAdvertiseItems
                            key={advertiseItem._id}
                            advertiseItem={advertiseItem}
                            refetch={refetch}
                        >
                        </DisplayAdvertiseItems>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AdvertisementSection;