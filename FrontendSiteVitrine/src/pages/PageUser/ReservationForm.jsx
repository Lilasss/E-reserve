import React, { useState } from 'react';
import Navbar from './Navbar';

const ReservationForm = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const locations = [
    // 'Antananarivo', 'Fianarantsoa', 'Toliara',
    // 'Mahajanga', 'Antsiranana', 'Tamatave'

  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 p-6">
        <form onSubmit={handleSubmit} className="bg-white p-10 shadow-2xl rounded-3xl w-full max-w-lg transition-all duration-300 hover:shadow-3xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Choisissez votre itinéraire</h2>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">Départ</label>
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            >
              <option value="" disabled>Sélectionner</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">Arrivée</label>
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            >
              <option value="" disabled>Sélectionner</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">Date du voyage</label>
            <input
              type="date"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">Nombre de passagers</label>
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
              <button
                type="button"
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
                onClick={() => setPassengers(passengers > 1 ? passengers - 1 : 1)}
              >-</button>
              <span className="text-xl font-bold text-gray-800">{passengers}</span>
              <button
                type="button"
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
                onClick={() => setPassengers(passengers + 1)}
              >+</button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none hover:bg-gray-900 transition duration-300"
          >Réserver</button>
        </form>
      </div>
    </>
  );
};

export default ReservationForm;
