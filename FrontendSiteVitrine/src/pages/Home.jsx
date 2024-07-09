import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Benefits from '../sections/Benefits';
import Faq from '../sections/Faq';
import ScrollToTop from '../sections/ScrollToTop';
import Services from '../sections/Services';


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
