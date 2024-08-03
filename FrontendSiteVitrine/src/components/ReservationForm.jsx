import React, { useState } from 'react';

const ReservationForm = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const locations = [
    'Antananarivo', 'Fianarantsoa', 'Toliara',
    'Mahajanga', 'Antsiranana', 'Tamatave'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-10 shadow-xl rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Choisissez votre itinéraire</h2>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Départ</label>
          <select
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          >
            <option value="" disabled>Sélectionnez</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Arrivée</label>
          <select
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          >
            <option value="" disabled> Sélectionner</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Date du voyage</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Nombre de passagers</label>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-gray-200 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setPassengers(passengers > 1 ? passengers - 1 : 1)}
            >-</button>
            <span className="text-xl font-bold">{passengers}</span>
            <button
              type="button"
              className="bg-gray-200 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setPassengers(passengers + 1)}
            >+</button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-xl focus:outline-none hover:bg-blue-600 transition duration-300"
        >Réserver</button>
      </form>
    </div>
  );
};

export default ReservationForm;
