import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-500">Accueil</a>
          <a href="/voyage" className="text-gray-700 hover:text-blue-500">Voyage</a>
          <a href="/services" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="/informations" className="text-gray-700 hover:text-blue-500">Informations</a>
          <a href="/aide" className="text-gray-700 hover:text-blue-500">Aide</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
