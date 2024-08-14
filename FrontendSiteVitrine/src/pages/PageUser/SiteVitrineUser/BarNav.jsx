import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import logoImage from '../../../assets/1logo.png';
import '../../../layout/Header.css';
import Carousel from './Caroussel';
import Transport from './Transport';
import Reserve from '../Reserve';


const BarNav = () => {
    const navigate = useNavigate();

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
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-blue-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
                                    <li className="hover:bg-blue-800 hover:text-white transition rounded-t-lg">
                                        <button onClick={() => scrollToSection('carousel')} className="block px-4 py-2">Événement</button>
                                    </li>
                                    <li className="hover:bg-blue-800 hover:text-white transition">
                                        <Link to="/services/chambre" className="block px-4 py-2">Chambre</Link>
                                    </li>
                                    <li className="hover:bg-blue-800 hover:text-white transition rounded-b-lg">
                                        <button onClick={() => scrollToSection('reserve')} className="block px-4 py-2">Transport</button>
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

            <div id="reserve">
                <Reserve />
            </div>

            <div id="transport">
                <Transport />
            </div>
        </>
    );
};

export default BarNav;
