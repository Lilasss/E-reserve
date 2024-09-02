import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../../../assets/1logo.png';
import { FaCalendarAlt, FaBus } from 'react-icons/fa';
import images from '../assets/six.jpeg';
import TicketStepsImage from '../assets/show.jpg';
import '../../../layout/Header.css';
import Reserve from '../Reserve';
import Carousel from './Caroussel';
import Footer from '../../../layout/Footer';
import TicketSteps from '../../../sections/SiteVitrine1/TicketSteps';
import Event from './Evenement/Event';
import TypeService from '../../../sections/TypeService';

const BarNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const section = queryParams.get('section');
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className="bg-gradient-to-r from-[#0A5DA6] to-[#0A5DA6] p-5 text-white shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="flex items-center cursor-pointer" onClick={() => navigate('/home')}>
                        <img src={logoImage} alt="E-Reserve" className="h-12 w-auto" />
                    </h1>
                    <nav>
                        <ul className="flex space-x-10">
                            <li>
                                <span
                                    onClick={() => navigate('/home')}
                                    className="bg-green-400 text-blue-800 font-semibold py-3 px-8 rounded-full hover:bg-green-600 hover:text-transition duration-300 cursor-pointer"
                                >
                                    Devenir administrateur
                                </span>
                            </li>
                            <li>
                                <span
                                    onClick={() => navigate('/login')}
                                    className="bg-yellow-400 text-blue-800 font-semibold py-3 px-8 rounded-full hover:bg-blue-800 hover:text-white transition duration-300 cursor-pointer"
                                >
                                    Se connecter
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* <TypeService /> */}
            {/* <Event /> */}

            {/* <div id="carousel">
                <Carousel />
            </div> */}
            {/* 
            <div id="chambre"></div>
            <div className="mt-6">
                <TicketSteps />
            </div> */}
            {/* <div className="flex justify-center items-center py-10">
                <div className="w-full max-w-4xl p-5 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="lg:w-1/2 p-5">
                            <img src={TicketStepsImage} alt="TicketSteps" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                        <div className="lg:w-1/2 p-5 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Gérez facilement vos services de réservations</h2>
                            <p className="text-gray-600 mb-6 text-center lg:text-left">
                                E-reserve est une plateforme 100% en ligne de gestion de service de réservation incluant : Billetterie en ligne, inscriptions, invitations, contrôle d’accès, marketing, etc... Elle permet l’administration et la supervision en temps réel de votre événement.
                            </p>
                            <button className="bg-[#0A5DA6] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1f405d] transition duration-300 mx-auto lg:mx-0">
                                Créer un événement
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="pt-32">
                <Footer />
            </div> */}
        </>
    );
};

export default BarNav;
