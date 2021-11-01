import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/services img/1.png'

const Blog = () => {
    return (
        <div className="mx-10">


            {/* <div className="w-full bg-white p-12">
                <div className="header flex items-end justify-between mb-12">
                    <div className="title">
                        <p className="text-4xl font-bold text-gray-800 mb-4">
                            Lastest articles
                        </p>
                        <p className="text-2xl font-light text-gray-400">
                            All article are verified by 2 experts and valdiate by the CTO
                        </p>
                    </div>
                    <div className="text-end">
                        <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div className=" relative ">
                                <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title" />
                            </div>
                            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#home" className="w-full block h-full">
                            <img alt="" src={img} />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <p className="text-indigo-500 text-md font-medium">
                                    Video
                                </p>
                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    Work at home
                                </p>
                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                    Work at home, remote, is the new age of the job, every person can work at home....
                                </p>
                                <div className="flex items-center mt-4">
                                    <a href="#home" className="block relative">
                                        <img alt="profil" src={img} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                        <p className="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p className="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#home" className="w-full block h-full">
                            <img alt="" src={img} className="max-h-40 w-full object-cover" />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <p className="text-indigo-500 text-md font-medium">
                                    Oui
                                </p>
                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div className="flex items-center mt-4">
                                    <a href="#home" className="block relative">
                                        <img alt="profil" src={img} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                        <p className="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p className="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#home" className="w-full block h-full">
                            <img alt="" src={img} className="max-h-40 w-full object-cover" />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <p className="text-indigo-500 text-md font-medium">
                                    Oui
                                </p>
                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div className="flex items-center mt-4">
                                    <a href="#home" className="block relative">
                                        <img alt="profil" src={img} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                        <p className="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p className="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#home" className="w-full block h-full">
                            <img alt="" src={img} />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <p className="text-indigo-500 text-md font-medium">
                                </p>
                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div className="flex items-center mt-4">
                                    <a href="#home" className="block relative">
                                        <img alt="profil" src={img} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                        <p className="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p className="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#home" className="w-full block h-full">
                            <img alt="" src={img} className="max-h-40 w-full object-cover" />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <p className="text-indigo-500 text-md font-medium">
                                </p>
                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div className="flex items-center mt-4">
                                    <a href="#home" className="block relative">
                                        <img alt="profil" src={img} />
                                    </a>
                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                        <p className="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p className="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#home" className="w-full block h-full">
                            <img alt="" src={img} />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <p className="text-indigo-500 text-md font-medium">
                                    Oui
                                </p>
                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div className="flex items-center mt-4">
                                    <a href="#home" className="block relative">
                                        <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                        <p className="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p className="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div> */}





            <h2 className="text-pink-600 text-5xl font-bold my-20">Blog List
                <hr />
            </h2>
            <main className="mt-12">
                {/* <!-- recent posts --> */}
                <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                    <h2 className="font-bold text-3xl">Latest news</h2>
                    <Link to="/blog" className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
                        View all
                    </Link>
                </div>
                <div className="block space-x-0 lg:flex lg:space-x-6">

                    <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
                        <img src={img} className="rounded" alt="technology" />
                        <div className="p-4 pl-0">
                            <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
                            <p className="text-gray-700 mt-2">
                                Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
                                So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
                            </p>

                            <a href="#blog" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
                        </div>
                    </div>

                    <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
                        <img src={img} className="rounded" alt="technology" />
                        <div className="p-4 pl-0">
                            <h2 className="font-bold text-2xl text-gray-800">Is at purse tried jokes china ready decay an. </h2>
                            <p className="text-gray-700 mt-2">
                                Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in.
                                Procured shutters mr it feelings. To or three offer house begin taken am at.
                            </p>

                            <a href="#blog" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
                        </div>
                    </div>

                    <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
                        <img src={img} className="rounded" alt="technology" />
                        <div className="p-4 pl-0">
                            <h2 className="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
                            <p className="text-gray-700 mt-2">
                                Alteration connection to so as collecting me.
                                Difficult in delivered extensive at direction allowance.
                                Alteration put use diminution can considered sentiments interested discretion.
                            </p>

                            <a href="#blog" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default Blog;


