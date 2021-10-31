import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/services img/1.png'

const Blog = () => {
    return (
        <div className="mx-10">
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
        // </div >
    );
};

export default Blog;