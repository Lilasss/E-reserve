// src/pages/PageUser/SiteVitrineUser/Transport/Transport.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BarNav from '../BarNav';
import Reserve from '../../Reserve';
import images from '../../assets/six.jpeg';
import TicketSteps from '../../../../sections/SiteVitrine1/TicketSteps';
import Footer from '../../../../layout/Footer';
import TransportTabs from './TransportTabs';
import TicketStepsImage from '../../assets/show.jpg';
import { FaArrowUp } from 'react-icons/fa';

function Transport() {
    const [showScroll, setShowScroll] = useState(false);
    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useState(null);
    const navigate = useNavigate();

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 200) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 200) {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreateEventClick = () => {
        navigate('/home');
    };

    const handleSearch = (params) => {
        setSearchParams(params);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8080/auth/success', {
                    withCredentials: true,
                });

                if (res.status === 200) {
                    setData(res.data);
                    sessionStorage.setItem('userData', JSON.stringify(res.data));
                } else {
                    console.log(`Erreur : code de statut ${res.status}`);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData();
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, []);

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
                    <Reserve onSearch={handleSearch} />
                </div>
            </div>
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
                            <button
                                className="bg-[#0A5DA6] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1f405d] transition duration-300 mx-auto lg:mx-0"
                                onClick={handleCreateEventClick}
                            >
                                Créer un service de transport
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showScroll && (
                <div className="fixed bottom-4 right-4 z-50">
                    <button
                        onClick={scrollToTop}
                        className="bg-[#0A5DA6] text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
                    >
                        <FaArrowUp className="text-xl" />
                    </button>
                </div>
            )}

            <div className="pt-12">
                <Footer />
            </div>
        </>
    );
}

export default Transport;
