import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../../../assets/1logo.png';
import { FaCalendarAlt, FaBus } from 'react-icons/fa';
import '../../../layout/Header.css';

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

    return (
        <>
            <header className="bg-gradient-to-r from-[#0A5DA6] to-[#0A5DA6] p-5 text-white shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-8">
                        <h1 className="flex items-center cursor-pointer" onClick={() => navigate('/home')}>
                            <img src={logoImage} alt="E-Reserve" className="h-12 w-auto" />
                        </h1>

                        <div className="flex items-center">
                            <ul className="flex space-x-6 text-white">
                                <Link to="/events" className="flex items-center space-x-2 px-6 py-3 cursor-pointer hover:text-yellow-300 transition ease-in-out duration-300">
                                    <FaCalendarAlt className="text-xl" />
                                    <span className="text-lg font-medium">Événement</span>
                                </Link>
                                <Link to="/transports" className="flex items-center space-x-2 px-6 py-3 cursor-pointer hover:text-yellow-300 transition ease-in-out duration-300">
                                    <FaBus className="text-xl" />
                                    <span className="text-lg font-medium">Transport</span>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <nav>
                        <ul className="flex space-x-10">
                            <li>
                                <span
                                    onClick={() => navigate('/home')}
                                    className="bg-green-400 text-blue-800 font-semibold py-3 px-8 rounded-full hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer"
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
        </>
    );
};

export default BarNav;
