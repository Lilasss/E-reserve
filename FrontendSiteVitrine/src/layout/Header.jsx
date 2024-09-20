import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../../src/pages/PageUser/assets/six.jpeg';
import logoImage from '../assets/1logo.png';
import './Header.css';
import ContactFormModal from '../components/ContactFormModal';

const Header = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const handleSmoothScroll = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        };

        const links = document.querySelectorAll("nav a");

        links.forEach(link => {
            link.addEventListener("click", handleSmoothScroll);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener("click", handleSmoothScroll);
            });
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
    }

    const openModal = () => {
        setModalOpen(true);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.classList.remove('modal-open');
    };

    return (
        <>
            <header id='header' className="bg-gradient-to-r from-[#0A5DA6] to-[#0A5DA6] p-5 text-white fixed top-0 w-full z-50 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="flex items-center">
                        <img src={logoImage} alt="E-Reserve" className="h-12 w-auto" />
                    </h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#header" className="hover:text-yellow-300 transition">Accueil</a></li>
                            <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
                            <li><a href="#benefits" className="hover:text-yellow-300 transition">Avantages</a></li>
                            <li><a href="#footer" className="hover:text-yellow-300 transition">Contact</a></li>
                            <li>
                                <span
                                    onClick={() => handleNavigation('/login')}
                                    className="bg-yellow-400 text-blue-800 font-semibold py-2 px-6 rounded-full hover:bg-blue-800 hover:text-white transition duration-300 transition cursor-pointer"
                                >
                                    Se connecter
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* style={{ backgroundImage: `url(${backgroundImage})` }}  */}
            <div className="relative h-96 bg-cover bg-center bg-[#0A5DA6] overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 transform-gpu perspective-1000">
                    <div className="bg-cover bg-center transition-transform duration-300 ease-in-out" style={{ backgroundImage: `url(${backgroundImage})`, transform: 'translateZ(-1px) scale(2)' }}></div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <br /><br /><br /><br />
                    <h2 className="text-3xl text-[#9fbed9] font-bold animate-fadeIn">Bienvenue à E-Reserve</h2>
                    <p className="text-white text-base mt-4 animate-slideIn">La plateforme de gestion de réservations pour tous vos besoins.</p>
                    <a
                        onClick={openModal}
                        className="mt-6 text-white bg-green-500 py-2 px-4 rounded-full flex items-center space-x-2 cursor-pointer hover:bg-green-600 transition"
                    >
                        <span>Introduire une demande</span>
                        <FaArrowDown />
                    </a>
                </div>
            </div>


            {modalOpen && <ContactFormModal onClose={closeModal} />}
        </>
    );
}

export default Header;
