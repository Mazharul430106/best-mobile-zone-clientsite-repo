import React, { useContext } from 'react';
import useTitle from '../../Hooks/useTitle/useTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import {toast} from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    useTitle('Login');
    const { register, handleSubmit } = useForm();
    const { loginUser, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLoginFormData = (data) => {
        // console.log(data);
        loginUser(data.email, data.password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success('User Login Successfully')
            navigate(from, { replace: true });
        })
        .then(error=> {
            console.log(error);
        })
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = ()=>{
        providerLogin(googleProvider)
        .then(result=> {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .then(error=> {
            console.log(error);
        })
    }
   
    
    return (
        <div className="hero">
            <div className="hero-content w-full lg:w-[500px] flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 style={{ fontSize: '30px', fontWeight: 'bold' }} className='text-center'>Login Now</h3>
                        <form onSubmit={handleSubmit(handleLoginFormData)}>
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
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                            <div className='text-center pt-4'>
                                <p className=''>Create a new account ? <Link className='text-red-500' to='/register'>Please Register</Link></p>

                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="form-control pb-3">
                            <button onClick={handleGoogleLogin} type='btn' className='btn btn-primary text-white'>Sing in with google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;