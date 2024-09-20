import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

const Reserve = ({ onSearch }) => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState(null);
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ departure, arrival, date, passengers });
  };

  const locations = [
    { value: 'Antananarivo', label: 'Antananarivo', },
    { value: 'Antsirabe', label: 'Antsirabe' },
    { value: 'Manakara', label: 'Manakara' },
    { value: 'Fianarantsoa', label: 'Fianarantsoa' },
    { value: 'Toamasina', label: 'Toamasina' },
  ];

  return (
    <div className="pt-0 pb-8 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg flex flex-wrap gap-8 items-center text-sm relative z-10"
        >
          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="block text-gray-500 mb-2">Lieu de départ</label>
            <select
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="appearance-none w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:outline-none"
            >
              <option value="" disabled>Sélectionner</option>
              {locations.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="block text-gray-500 mb-2">Lieu d'arrivée</label>
            <select
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="appearance-none w-full px-4 py-3 border text-gray-600 border-gray-300 rounded-lg focus:outline-none"
            >
              <option value="" disabled>Sélectionner</option>
              {locations.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="block text-gray-500 mb-2">Date</label>
            <DatePicker
              selected={date}
              onChange={setDate}
              dateFormat="dd/MM/yyyy"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none"
              placeholderText="Sélectionner une date"
            />
          </div>

          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="block text-gray-500 mb-2">Place</label>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 border hover:bg-gray-300 transition"
                onClick={() => setPassengers(passengers > 1 ? passengers - 1 : 1)}
              >
                -
              </button>
              <span className="px-7">{passengers}</span>
              <button
                type="button"
                className="bg-gray-200 px-4 py-2 border hover:bg-gray-300 transition"
                onClick={() => setPassengers(passengers + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
              style={{ height: '48px', width: '48px' }}
            >
              <FaSearch className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
