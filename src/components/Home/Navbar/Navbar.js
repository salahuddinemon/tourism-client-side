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
                        </ul>
                        <ul className="flex justify-center items-center space-x-3 cursor-pointer">
                            {user.email && <span className="mr-2">
                                <div className="flex justify-center items-center space-x-3 cursor-pointer">
                                    {/* <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                                        <img src={user.photoURL} alt="" className="w-full h-full object-cover" />
                                    </div> */}
                                    <div className="font-lg dark:text-white text-white-900 text-md">
                                        <div className="cursor-pointer">Hi, {user.displayName}</div>
                                    </div>
                                </div>
                            </span>}
                            {
                                user.email ?
                                    <button className="font-bold" onClick={logOut}>LogOut</button>
                                    :
                                    <li><NavLink className="flex items-center font-bold	 mr-10 hover:text-purple-200" to="/login">Login</NavLink></li>}
                        </ul>
                    </div>
                </nav>

                {/*Display Side Navbar when Logged in  */}
                <div className="flex justify-between">
                    {user.email && <div className="hidden lg:block ml-4 shadow-lg relative w-80">
                        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                            <nav className="mt-6">
                                <div>
                                    <img src={user.photoURL} className="rounded-full w-10 h-10 mb-3 mx-auto" alt="" />
                                </div>
                                <div>
                                    <h2 className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500">
                                        <span className="text-left">
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            Dashboard
                                        </span>
                                    </h2>
                                    <Link className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" to='/myservices'>
                                        <span className="text-left">
                                            <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="mx-4 text-sm font-semibold">
                                            My Services
                                        </span>
                                    </Link>
                                    <Link className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" to='/allservices'>
                                        <span className="text-left">
                                            <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="mx-4 text-sm font-semibold">
                                            Public Serviecs
                                        </span>
                                    </Link>
                                    <Link className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" to='/addservice'>
                                        <span className="text-left">
                                            <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="mx-4 text-sm font-semibold">
                                            Add New Serviecs
                                        </span>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>}
                    <div>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </section>



        </div >
    );
};

export default Navbar;