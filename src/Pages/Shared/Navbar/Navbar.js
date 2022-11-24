import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOutUser = ()=>{
        logOutUser()
        .then(()=>{})
        .then(error=> {
            console.log(error);
        })
    }

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        
            {
                user?.uid ? <>

                    <li><Link onClick={handleLogOutUser}>Logout</Link></li>
                </>
                :
                <>

                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </>
            }


    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="normal-case text-xl">Best Mobile Zone</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;