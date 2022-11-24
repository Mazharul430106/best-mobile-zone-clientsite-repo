import React from 'react';
import useTitle from '../../Hooks/useTitle/useTitle';
import { Link } from 'react-router-dom';
const Login = () => {
    useTitle('Login');
    return (
        <div className="hero my-16">
            <div className="hero-content w-full lg:w-[500px] flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                            <div className='text-center pt-4'>
                                <p className=''>Create a new account ? <Link className='text-red-500' to='/register'>Please Register</Link></p>
                                
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <button type='btn' className='btn btn-primary text-white'>Sing in with google</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;