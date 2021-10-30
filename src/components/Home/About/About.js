import React from 'react';
import aboutimg from '../../../images/about img.jpg'

const About = () => {
    return (
        <div className="mx-8 my-14">
            <h4 className="text-red-700 text-3xl font-semibold mb-4">The Story About Us</h4>
            <h2 className="text-purple-700 text-6xl font-bold mb-24">The Best Travel Agency Company.</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <img src={aboutimg} alt="" />

                </div>
                <div>
                    <h2 className="text-green-700 text-3xl font-semibold mb-4">Who are we?</h2>
                    <p className="mt-14 font-normal text-xl italic ">TourX is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.
                    </p>
                </div>
            </div>
        </div >
    );
};

export default About;