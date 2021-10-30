import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo.png'
import banner from '../../../images/travel41.jpg'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="flex flex-wrap h-screen nav-section">
            <section className="my-0">
                {/* <!-- navbar --> */}
                <nav className="flex justify-between bg-gray-900 text-white w-screen">
                    <div className="px-6 x1:px-12 py-6 flex w-full items-center">
                        <a className="text-3xl font-bold font-heading" href="#home">
                            <img className="h-9 bg-gray-200" src={logo} alt="logo" />
                        </a>
                        {/* <!-- Nav Links --> */}
                        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                            <li><NavLink className="hover:text-gray-200" to="/home">Home</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/services">Services</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/blog">Blog</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/about">About Us</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/contact">Contact Us</NavLink></li>
                        </ul>
                        <ul>
                            {user.email && <span className="mr-2">Hi, {user.displayName}</span>}

                            {
                                user.email ?
                                    <button className="font-bold	" onClick={logOut}>Logout</button>
                                    :
                                    <li><NavLink className="flex items-center font-bold	 mr-10 hover:text-purple-200" to="/login">Login</NavLink></li>}

                        </ul>

                    </div>
                    {/* <!-- Responsive navbar --> */}


                </nav>
                <div>
                    <img src={banner} alt="" />
                </div>
            </section>

        </div >
    );
};

export default Navbar;