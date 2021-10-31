import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo.png'
import banner from '../../../images/travel41.jpg'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="flex flex-wrap mb-24 nav-section">
            <section className="">
                {/* <!-- navbar --> */}
                <nav className="flex justify-between bg-gray-900 text-white w-screen">
                    <div className="px-6 x1:px-12 py-4 flex w-full items-center">
                        <Link className="text-3xl font-bold font-heading" to="/home">
                            <img className="h-9 bg-gray-200" src={logo} alt="logo" />
                        </Link>
                        {/* <!-- Nav Links --> */}
                        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                            <li><NavLink className="hover:text-gray-200" to="/home">Home</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/services">Services</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/blog">Blog</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/about">About Us</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/contact">Contact Us</NavLink></li>
                            {/* <li><NavLink className="hover:text-gray-200" to="/myservices">My Services</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/allservices">Manage All Services</NavLink></li>
                            <li><NavLink className="hover:text-gray-200" to="/addservice">Add New Services</NavLink></li> */}
                        </ul>
                        <ul className="flex justify-center items-center space-x-3 cursor-pointer">
                            {user.email && <span className="mr-2">
                                <div class="flex justify-center items-center space-x-3 cursor-pointer">
                                    <div class="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                                        <img src={user.photoURL} alt="" class="w-full h-full object-cover" />
                                    </div>
                                    <div class="font-lg dark:text-white text-white-900 text-md">
                                        <div class="cursor-pointer">Hi, {user.displayName}</div>
                                    </div>
                                </div>
                            </span>}
                            {
                                user.email ?
                                    <button className="font-bold" onClick={logOut}>Logout</button>
                                    :
                                    <li><NavLink className="flex items-center font-bold	 mr-10 hover:text-purple-200" to="/login">Login</NavLink></li>}
                        </ul>
                    </div>
                </nav>
                <div className="flex flex-wrap">
                    <section>
                        <nav className="flex justify-between bg-green-900 text-white w-screen">
                            <div className="px-6 x1:px-12 py-2 flex w-full items-center">
                                <div class="w-15 h-15 overflow-hidden border-2 p-1">
                                    {/* <img src={user.photoURL} alt="" class="w-full h-full object-cover" /> */}
                                    <h1>Your Account Activity</h1>
                                </div>
                                {/* <!--Admin Nav Links --> */}
                                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                    <li><NavLink className="hover:text-gray-200" to="/myservices">My Services</NavLink></li>
                                    <li><NavLink className="hover:text-gray-200" to="/allservices">Manage All Services</NavLink></li>
                                    <li><NavLink className="hover:text-gray-200" to="/addservice">Add New Services</NavLink></li>
                                </ul>
                            </div>
                        </nav>
                    </section>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </section>
        </div >
    );
};

export default Navbar;