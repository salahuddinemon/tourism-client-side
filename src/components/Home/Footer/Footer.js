import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-24">
            {/* <!-- component --> */}
            <script className="w-1" src="https://kit.fontawesome.com/4db6b32bd3.js" crossOrigin="anonymous"></script>
            <div className="w-full bg-purple-900 text-white">
                <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                    <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2  justify-start">
                        <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                            <img className="w-60" src={logo} alt="" />
                            <p className="opacity-60">Concord Royal Court (3rd floor)
                                Dhanmondi, Dhaka 1209, Bangladesh.</p>
                        </div>
                        <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                            <Link className="opacity-60" to="/home">Home</Link>
                            <Link className="opacity-60" to="/services">Services</Link>
                            <Link className="opacity-60" to="/about">About Us</Link>
                            <Link className="opacity-60" to="/contact">Contact Us</Link>
                        </div>
                        <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                            <div>
                                <h2 className="text-4xl text-yellow-700	font-bold">Join Newsletter</h2>
                                <h4 className="text-lg bold font-semibold">To receive our best deals
                                </h4>
                                <form className="m-4 flex">
                                    <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com" />
                                    <button className="px-4 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-60 pt-2">
                        <p>© 2021 Your Company. Designed by emonthex</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;