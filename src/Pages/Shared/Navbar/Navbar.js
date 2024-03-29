import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    // console.log(user)

    const handleLogOutUser = () => {
        logOutUser()
            .then(() => { })
            .then(error => {
                console.log(error);
            })
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/reviewPage'>Reviews</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <>
            {
                user?.uid ? <>

                    <li className=''><Link className='' onClick={handleLogOutUser}>Logout</Link></li>
                </>
                    :
                    <>

                        <li><Link to='/register'>Register</Link></li>
                        <li className=''><Link className='' to='/login'>Login</Link></li>
                    </>

            }

        </>

        <>
            {
                user?.photoURL ? <>
                    <div className='flex items-center  justify-center pl-2'>
                        <img title={user?.displayName} className='w-[35px] h-[35px] rounded-full  cursor-pointer' src={user?.photoURL} alt="" />
                    </div>
                </>
                    :
                    <>
                        <div className='flex xl:items-center xl:justify-center justify-start p-4'>
                            <FaUser className=''></FaUser>
                        </div>
                    </>
            }
        </>
        
    </>

    return (
        <div className="navbar bg-base-100 xl:px-[7%] lg:px-[7%] md:px-[7%] px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">Best Mobile Zone</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                <label tabIndex={0} className="btn btn-ghost lg:hidden" htmlFor="dashboard-drawer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;

