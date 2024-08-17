import React from 'react';
import logo from '../../assets/2logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-900 hover:text-[#074E9B] px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out"
            >
              Accueil
            </a>
            <a
              href="#evenement"
              className="text-gray-900 hover:text-[#074E9B] px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out"
            >
              Événement
            </a>
            <a
              href="#voyage"
              className="text-gray-900 hover:text-[#074E9B] px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out"
            >
              Voyage
            </a>
            <a
              href="#information"
              className="text-gray-900 hover:text-[#074E9B] px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out"
            >
              Information
            </a>
            <a
              href="#reservation"
              className="text-gray-900 hover:text-[#074E9B] px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out"
            >
              Réservation de Transport
            </a>
            <a
              href="#login"
              className="bg-[#074E9B] text-white hover:bg-[#063B6B] px-4 py-2 rounded-full text-md font-medium shadow-lg transition duration-300 ease-in-out"
            >
              Se Connecter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
