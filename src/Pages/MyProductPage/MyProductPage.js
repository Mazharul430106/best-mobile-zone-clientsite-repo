import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle/useTitle';
import DisplayProducts from './DisplayProducts';

const MyProductPage = () => {
    useTitle('My Products')
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://best-mobile-zone-server.vercel.app/products?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [user?.email])


    return (
        <div className='w-[95%] mx-auto'>
            <h2 className='text-3xl font-semibold'>My Products</h2>
            <div className='grid lg:grid-cols-3 gap-10 py-5 pb-10'>
                {
                    products?.map(product => <DisplayProducts key={product._id} product={product}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default MyProductPage;