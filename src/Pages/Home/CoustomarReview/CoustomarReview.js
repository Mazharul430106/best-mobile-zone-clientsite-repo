import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CoustomarReview = () => {
    const {user} = useContext(AuthContext);
    // console.log(user)
    const { register, handleSubmit } = useForm();

    const handleCoustomarReview = (data, even) => {
        
        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
       })
       .then(res=> res.json())
       .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success('Review added sucessfully')
                even.target.reset();
            }else if(data.acknowledged > 1){
                toast.success('You have one review maximum added')
            }else{
                toast.error('Your Review all ready Exist')
            }
       })
       .catch(error=> {
            console.log(error)
       })
   
    }

    return (
        <div className='px-[7%]'>
            <div className='text-center py-10'>
                <h1 className='text-5xl font-bold capitalize'>Our Servece Review</h1>
            </div>

            <form onSubmit={handleSubmit(handleCoustomarReview)}>
                <div className='xl:flex lg:flex md:flex flex-none gap-3'>
                    <input type="text" {...register("name", { required: true })} name='name' value={user?.displayName} readOnly placeholder="name" className="input input-bordered input-primary focus:outline-none mb-2 rounded-lg w-full" />
                    
                </div>
                <div className='xl:flex lg:flex md:flex flex-none gap-3'>
                    <input type="email" {...register("email", { required: true })} name='email' value={user?.email} readOnly placeholder="Email" className="input input-bordered input-primary focus:outline-none rounded-lg mb-2 w-full" />
                    <input type="url" {...register("url", { required: true })} name='url' value={user?.photoURL} readOnly placeholder="Img_Url" className="input input-bordered input-primary focus:outline-none rounded-lg mb-2 w-full " />
                </div>
                <div>
                    <textarea typeof='textarea' minLength='10' maxLength='200' {...register("review", { required: true })} name='review' className="textarea textarea-primary w-full focus:outline-none xl:min-h-[200px] lg:min-h-[200px] md:min-h-[200px] min-h-[150px]  mb-3 rounded-lg " placeholder="Message"></textarea>
                </div>
                <div className='flex  items-center justify-end'>
                    <button type='submit' className='btn btn-primary xl:w-[180px] lg:w-[180px] md:w-[180px] w-full text-white mb-20 rounded-lg'>Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default CoustomarReview;

