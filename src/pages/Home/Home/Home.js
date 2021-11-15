import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Property from '../Property/Property';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           
            <Banner/>
            <Services/>
            <Property/>
            <AboutUs/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;