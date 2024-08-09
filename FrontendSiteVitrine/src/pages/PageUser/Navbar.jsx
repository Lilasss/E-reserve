import React from 'react';
import logo from '../../assets/2logo.png';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Accueil
              </a>
              <a href="#voyage" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Voyage
              </a>
              <a href="#information" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Information
              </a>
              <a href="#login" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Se Connecter
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
