import React from 'react';

const FeaturedService = () => {
    return (
        <div className="py-20">
            <div className="bg-green-100 py-14">
                <h3 className="text-2xl tracking-widest text-green-600 text-center">FEATURES</h3>
                <h1 className="mt-8 text-center text-5xl text-green-600 font-bold">Our Featured Services</h1>
                <div className="md:flex md:justify-center md:space-x-8 md:px-14">
                    {/* <!-- box-1 --> */}
                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-64" src="https://as1.ftcdn.net/v2/jpg/02/04/21/50/500_F_204215060_y6tySprcIGpy0ec0FUMOBVzTYwssYWnM.jpg" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">UMRAH PACKAGE</h1>
                                <p className="mt-4 text-gray-600">TourX Umrah group put special focus while arranging 5-star facilities for your umrah package 2021-2022 from Dhaka, Bangladesh.</p>
                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-2 --> */}
                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-60" src="https://image.flaticon.com/icons/png/512/1028/1028364.png" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">TOUR PACKAGE</h1>
                                <p className="mt-4 text-gray-600">Get Best Tour Package Deal Provider. 20000+ Happy Travelers. Features: Pick And Drop, Honeymoon Cake, Candle Light Dinner.</p>
                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-3 --> */}
                    <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm">
                            <img className="w-60" src="https://image.flaticon.com/icons/png/128/1257/1257322.png" alt="" />
                            <div className="mt-4 text-green-600 text-center">
                                <h1 className="text-xl font-bold">VISA SERVICE</h1>
                                <p className="mt-4 text-gray-600">TourX provides the simplest solution to process your travel visa. We enable travelers to process visas from a computer, smartphone or tablet.
                                </p>
                                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;