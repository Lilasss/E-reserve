import React, { useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/1reserve.jpeg';

const Header = () => {
    const navigate = useNavigate();

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

    return (
        <>
            <header id='header' className="bg-gradient-to-r from-[#0A5DA6] to-[#0A5DA6] p-5 text-white fixed top-0 w-full z-50 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold flex items-center">
                        <span className="mr-2"></span> E-Reserve
                    </h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#header" className="hover:text-yellow-300 transition">Accueil</a></li>
                            <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
                            <li><a href="#benefits" className="hover:text-yellow-300 transition">Avantages</a></li>
                            <li><a href="#footer" className="hover:text-yellow-300 transition">Contact</a></li>
                            <li>
                                <span
                                    onClick={() => handleNavigation('/login')}
                                    className="hover:text-yellow-300 transition cursor-pointer"
                                >
                                    Se connecter
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <br /><br />
                    <h2 className="text-4xl text-white font-bold">Bienvenue à E-Reserve</h2>
                    <p className="text-white mt-4">La plateforme de gestion de réservations pour tous vos besoins.</p>

                    <a href="#introduction" className="mt-6 text-white bg-yellow-500 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-yellow-600 transition">
                        <span>En savoir plus</span>
                        <FaArrowDown />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;
