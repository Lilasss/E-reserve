import React, { useState } from 'react';

const ReservationForm = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('Date');
  const [passengers, setPassengers] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const locations = [
    'Sélectionner', 'Fianarantsoa', 'Toliara',
    'Mahajanga', 'Antsiranana', 'Tamatave', 'Antananarivo'
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full space-y-4"
      >
        <h2 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
          <span className="border-2 border-blue-600 rounded-full px-2 py-1 mr-2">1</span>
          Sélé
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Départ</label>
            <select
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            >
              
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Arrivée</label>
            <select
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Date du voyage</label>
            <input
              type="date"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Voyageur(s)</label>
            <div className="flex items-center mt-2">
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 rounded-l-lg focus:outline-none"
                onClick={() => setPassengers(passengers > 1 ? passengers - 1 : 1)}
              >-</button>
              <span className="px-4">{passengers}</span>
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 rounded-r-lg focus:outline-none"
                onClick={() => setPassengers(passengers + 1)}
              >+</button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Rechercher
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
