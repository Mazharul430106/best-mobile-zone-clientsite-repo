import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div >
                <p> <span className='text-3xl font-semibold'> Best Mobile Zone</span><br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Products</span>
                <Link className="link link-hover">iPhone</Link>
                <Link className="link link-hover">Androwed Phone</Link>
                <Link className="link link-hover">Button Phone</Link>
            </div>
            <div>
                <span className="footer-title">Companys</span>
                <Link className="link link-hover">Apple</Link>
                <Link className="link link-hover">Vivo</Link>
                <Link className="link link-hover">Xiaome</Link>
                <Link className="link link-hover">Symphony</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
