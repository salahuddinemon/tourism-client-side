import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;