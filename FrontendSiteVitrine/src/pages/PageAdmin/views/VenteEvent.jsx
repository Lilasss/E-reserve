import React from 'react';

const VenteEvent = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <select className="appearance-none w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400">
            <option>Évènement</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Source de vente"
            className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <input
            type="date"
            placeholder="Début"
            className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Fin"
            className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="relative">
          <select className="appearance-none w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400">
            <option>Type de billet</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
            Rechercher
          </button>
        </div>
      </div>
      
      <div className="flex justify-start mt-6 space-x-4">
        <button className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
          <svg
            className="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 2a2 2 0 00-2 2v3H3a2 2 0 00-2 2v4a2 2 0 002 2h1v3a2 2 0 002 2h8a2 2 0 002-2v-3h1a2 2 0 002-2v-4a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H6zm0 2h8v3H6V4zm10 8v4H4v-4h12zM8 14a2 2 0 104 0H8z" />
          </svg>
          Imprimer
        </button>
        <button className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
          <svg
            className="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 7.172a4 4 0 015.656 0L10 8.344l1.172-1.172a4 4 0 115.656 5.656l-6.364 6.364a1 1 0 01-1.414 0l-6.364-6.364a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          Exporter
        </button>
      </div>

      {/* Tableau */}
      <div className="mt-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-2 px-4">ÉVÈNEMENT</th>
              <th className="py-2 px-4">SOURCE DE VENTE</th>
              <th className="py-2 px-4">TYPE DE BILLET</th>
              <th className="py-2 px-4">NB</th>
              <th className="py-2 px-4">PRIX UNITAIRE</th>
              <th className="py-2 px-4">MONTANT</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VenteEvent;
