import React, { useContext } from 'react';
import useTitle from '../../Hooks/useTitle/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import {toast} from 'react-hot-toast';

const Register = () => {
    useTitle('Register');
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegisterFormData = data => {
        // console.log(data);
        createUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully')
            const profile = {
                displayName: data.name
            }
            updateUser(profile)
            .then(()=>{
                navigate('/')
            })
            .catch(error=> {
                console.log(error);
            })

        })
        .catch(error=> {
            console.log(error)
        })
    }


    return (
        <div>
            <div className="hero">
                <div className="hero-content w-full lg:w-[500px] flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h3 style={{ fontSize: '30px', fontWeight: 'bold' }} className='text-center'>Register Now</h3>
                            <form onSubmit={handleSubmit(handleRegisterFormData)} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register('name', { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register('email', { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register('password', { required: true })} name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Register</button>
                                </div>
                                <div className='flex px-1 justify-between pt-3 '>
                                    <p>All ready have an account ?</p>
                                    <Link className='text-red-500' to='/login'>Please Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;