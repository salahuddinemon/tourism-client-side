import React from 'react';
import Blog from '../Blog/Blog';
import FeaturedService from '../FeaturedService/FeaturedService';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Blog></Blog>
            <FeaturedService></FeaturedService>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;