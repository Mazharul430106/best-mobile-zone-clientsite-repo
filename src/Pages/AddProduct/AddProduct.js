import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle/useTitle';

const AddProduct = () => {
    useTitle('Add Product')

    const { register, handleSubmit } = useForm();
    const {user} = useContext(AuthContext);
    const date = new Date();
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const actualDate = currentDate + "-" +  currentMonth + "-" + currentYear; 

    const navigate = useNavigate();



    
    const handleSubmitProduct = (data) => {
        fetch(`http://localhost:5000/addedProducts`,{
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success('product added successfully')
                navigate('/myProduct');
            }
        })
        .then(error=> {
            console.log(error);
        })
    }


    return (
        <div className="hero pb-5">
            <div className="hero-content w-full lg:w-[500px] flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-2xl text-center'>Add Product</h1>
                        <form onSubmit={handleSubmit(handleSubmitProduct)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name='name' {...register('name', { required: true })} placeholder="product name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name='Seller_Name' {...register('Seller_Name', { required: true })} placeholder="product name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="text" name='image' {...register('image', { required: true })} placeholder="url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input type="text" name='Orignal_Price' {...register('Orignal_Price', {required: true })}  placeholder="original price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resel Price</span>
                                </label>
                                <input type="text" name='Resel_Price' {...register('Resel_Price', {required: true })}  placeholder="resel price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Conditions</span>
                                </label>
                                <select name='quality' {...register('quality', {required: true })} className="select select-bordered w-full">
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name='location' {...register('location', { required: true })} placeholder="location" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register('email', { required: true })}  placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name='phoneNumber' {...register('phoneNumber', { required: true })}  placeholder="phone" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Catagory</span>
                                </label>
                                <select name='phoneType' {...register('phoneType', { required: true })} className="select select-bordered w-full">
                                    <option>iPhone</option>
                                    <option>ButtonPhone</option>
                                    <option>AndrowedPhone</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name='message' {...register('message', { required: true })}  className="textarea textarea-bordered" placeholder="message"></textarea>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Year Of Use</span>
                                </label>
                                <input type="text" name='Year_Of_Use' {...register('Year_Of_Use', { required: true })} placeholder="year" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="text" name='Posted_Time' {...register('Posted_Time', { required: true })} placeholder="year" defaultValue={actualDate} required className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;