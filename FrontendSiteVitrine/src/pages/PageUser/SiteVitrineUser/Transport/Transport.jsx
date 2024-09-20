import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarNav from '../BarNav';
import Reserve from '../../Reserve';
import images from '../../assets/six.jpeg';
import TicketSteps from '../../../../sections/SiteVitrine1/TicketSteps';
import Footer from '../../../../layout/Footer';
import TransportTabs from './TransportTabs';
import TicketStepsImage from '../../assets/show.jpg';

function Transport() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState(null);

    const handleSearch = (params) => {
        setSearchParams(params);
    };

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
                <div className="-mt-3">
                    {/* Pass the handleSearch function to Reserve */}
                    <Reserve onSearch={handleSearch} />
                </div>
            </div>

            {/* Pass searchParams to TransportTabs */}
            <TransportTabs searchParams={searchParams} />

            <div className="mt-10">
                <TicketSteps />
            </div>

            <div className="flex justify-center items-center py-10">
                <div className="w-full max-w-4xl p-5 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="lg:w-1/2 p-5">
                            <img src={TicketStepsImage} alt="TicketSteps" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                        <div className="lg:w-1/2 p-5 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
                                Gérez facilement vos services de transport
                            </h2>
                            <p className="text-gray-600 mb-6 text-center lg:text-left">
                                E-reserve est une plateforme 100% en ligne de gestion de services de transport. Elle permet l'administration
                                et la supervision en temps réel de la réservation à la gestion des trajets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-12">
                <Footer />
            </div>
        </>
    );
}

export default Transport;
