import React from 'react';
import { useQuery } from '@tanstack/react-query';
import DisplayCategories from './DisplayCategories';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`https://best-mobile-zone-server.vercel.app/categories`)
        .then(res => res.json())
    });

    return (
        <div className='px-[7%]'>
            <div className=''>
                <h2 className='text-5xl font-semibold text-center py-10'>Our Phone Categories</h2>
            </div>
            <div className=''>
                <div className='grid lg:grid-cols-3 w-full gap-10 pb-16'>
                    {
                        categories.map(category => <DisplayCategories 
                            key={category._id}
                            category={category}
                            >
                            </DisplayCategories>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;

