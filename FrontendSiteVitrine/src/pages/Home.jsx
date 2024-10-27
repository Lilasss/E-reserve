import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Benefits from '../sections/Benefits';
import Faq from '../sections/Faq';
import ScrollToTop from '../sections/ScrollToTop';
import Services from '../sections/Services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Benefits />
            <ScrollToTop />
            <Faq />
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

export default Home;
