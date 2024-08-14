import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const AdminNavbar = () => {
    return (
        <header className="bg-gray-800 p-4 text-white fixed top-0 left-0 w-full z-40 shadow-lg border-b border-gray-700 h-16">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="flex-grow">
                </div>
                <div className="flex items-center space-x-5">
                    <div className="relative">
                        <FaBell className="text-2xl cursor-pointer" />
                        <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-2 -translate-y-2 bg-red-500 rounded-full"></span>
                    </div>
                    <div className="relative group">
                        <FaUserCircle className="text-2xl cursor-pointer" />
                        <ul className="absolute right-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
                            <li className="hover:bg-gray-700 transition rounded-t-lg">
                                <a href="/profile" className="block px-4 py-2">Profil</a>
                            </li>
                            <li className="hover:bg-gray-700 transition">
                                <a href="/settings" className="block px-4 py-2">Paramètres</a>
                            </li>
                            <li className="hover:bg-gray-700 transition rounded-b-lg">
                                <a href="/logout" className="block px-4 py-2">Déconnexion</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminNavbar;
