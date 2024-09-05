import React from 'react';
import BarNav from '../BarNav';
import Reserve from '../../Reserve';
import images from '../../assets/six.jpeg';
import { Link } from 'react-router-dom';
import TicketSteps from '../../../../sections/SiteVitrine1/TicketSteps';
import Footer from '../../../../layout/Footer';
import TransportTabs from './TransportTabs';
import TransportDetails from './TransportDetails';

function Transport() {
    return (
        <>
            <BarNav />
            <div className="relative bg-[#0A5DA6] pt-0">
                <img src={images} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="container mx-auto py-10">
                    <h1 className="text-3xl font-bold text-white text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Réservez des billets de train, taxi-brousse
                    </h1>
                </div>
                <div className="mt-"><Reserve /></div>
            </div>
            <TransportTabs />
            <div className="mt-48">
                <TicketSteps />
            </div>
            <div className="pt-12">
                <Footer />
            </div>
        </>
    );
}

export default Transport;
