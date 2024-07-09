import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import ScrollToTop from '../components/ScrollToTop';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Benefits />
            <ScrollToTop />
            <Faq />
            
            <Footer />

        </>
    );
}

export default Home;
