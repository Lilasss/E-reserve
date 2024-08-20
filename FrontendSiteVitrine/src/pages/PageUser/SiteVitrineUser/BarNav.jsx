import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import logoImage from '../../../assets/1logo.png';
import TicketStepsImage from '../assets/show.jpg'; // Adjust the path to your uploaded image
import '../../../layout/Header.css';
import Reserve from '../Reserve';
import Carousel from './Caroussel';
import Footer from '../../../layout/Footer';
import TicketSteps from '../../../sections/SiteVitrine1/TicketSteps';

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
            <header className="bg-gradient-to-r from-[#0A5DA6] to-[#0A5DA6] p-5 text-white fixed top-0 w-full z-50 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="flex items-center cursor-pointer" onClick={() => navigate('/home')}>
                        <img src={logoImage} alt="E-Reserve" className="h-12 w-auto" />
                    </h1>
                    <nav>
                        <ul className="flex space-x-10">
                            <li>
                                <Link to="/home" className="hover:text-yellow-300 transition">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/home" className="hover:text-yellow-300 transition">Devenir administrateur</Link>
                            </li>
                            <li className="relative group">
                                <span className="hover:text-yellow-300 transition cursor-pointer flex items-center">
                                    Services
                                    <FaChevronDown className="ml-2 text-sm" style={{ fontWeight: 'normal' }} />
                                </span>
                                <ul className="absolute left-0 mt-2 w-39 bg-white text-blue-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
                                    <li className="hover:bg-blue-600 hover:text-white transition rounded-t-lg">
                                        <button onClick={() => scrollToSection('carousel')} className="block px-4 py-2 text-left w-full">Événement</button>
                                    </li>
                                    <li className="hover:bg-blue-600 hover:text-white transition">
                                        <button onClick={() => scrollToSection('chambre')} className="block px-4 py-2 text-left w-full">Chambre</button>
                                    </li>
                                    <li className="hover:bg-blue-600 hover:text-white transition rounded-b-lg">
                                        <button onClick={() => scrollToSection('reserve')} className="block px-4 py-2 text-left w-full">Transport</button>
                                    </li>
                                </ul>
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

            <div id="carousel">
                <Carousel />
            </div>

            <div id="chambre">
            </div>

            <div id="reserve">
                <Reserve />
            </div>

            <TicketSteps />

            <div className="flex justify-center items-center py-10">
                <div className="w-full max-w-4xl p-5 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="lg:w-1/2 p-5">
                            <img src={TicketStepsImage} alt="TicketSteps" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                        <div className="lg:w-1/2 p-5 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Gérez facilement vos services de réservations</h2>
                            <p className="text-gray-600 mb-6 text-center lg:text-left">
                                Ticketplace est une plateforme 100% en ligne de gestion d’événements incluant : Billetterie en ligne et au guichet, inscriptions, invitations, contrôle d’accès, finance, marketing, etc... Elle permet l’administration à 360° et la supervision en temps réel de votre événement.
                            </p>
                            <button className="bg-[#0A5DA6] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1f405d] transition duration-300 mx-auto lg:mx-0">
                                Créer un événement
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pt-32">
                <Footer />
            </div>
        </>
    );
};

export default BarNav;
