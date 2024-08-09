import React, { useState } from 'react';
import Select from 'react-select';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Place from './Place';

const Reserve = () => {
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [horaires, setHoraires] = useState({
    matin: false,
    apresMidi: false,
    soir: false,
  });

  const handleCheckboxChange = (e) => {
    setHoraires({
      ...horaires,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter la logique de soumission du formulaire ici
  };

  const locations = [
    // Ajouter les options de lieu ici
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      height: '48px',
      minHeight: '48px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      '&:hover': {
        border: '1px solid #d1d5db',
      },
      width: '100%',
      maxWidth: '400px',
      borderRight: 'none',
      paddingRight: '0px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }),
    option: (base, state) => ({
      ...base,
      padding: '10px 20px',
      backgroundColor: state.isSelected ? '#f3f4f6' : base.backgroundColor,
      '&:hover': {
        backgroundColor: '#f3f4f6',
      },
    }),
  };

  const formatOptionLabel = ({ label }) => (
    <div className="flex items-center">
      <FaMapMarkerAlt className="mr-2 text-gray-500" />
      {label}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"> 
          <h2 className="text-xl mb-6 text-blue-800 flex items-center">
            <span className="border-2 border-blue-800 bg-blue-200 rounded-full px-3 py-1 mr-3 text-sm">1</span>
            Modifier l'itinéraire
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-wrap gap-8 items-center"
          >
            <div className="flex flex-col flex-1 min-w-[200px]"> 
              <label className="block text-gray-500 mb-2">Départ</label>
              <Select
                styles={customStyles}
                value={departure}
                onChange={(selectedOption) => setDeparture(selectedOption)}
                options={locations}
                formatOptionLabel={formatOptionLabel}
                placeholder="Sélectionner"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="block text-gray-500 mb-2">Arrivée</label>
              <Select
                styles={customStyles}
                value={arrival}
                onChange={(selectedOption) => setArrival(selectedOption)}
                options={locations}
                formatOptionLabel={formatOptionLabel}
                placeholder="Sélectionner"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="block text-gray-500 mb-2">Date du voyage</label>
              <input
                type="date"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ borderColor: '#e2e8f0', boxShadow: 'none' }}
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="block text-gray-500 mb-2">Voyageur(s)</label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="bg-gray-200 px-4 py-2 border border-gray-300 focus:outline-none hover:bg-gray-300 transition duration-150 ease-in-out"
                  onClick={() => setPassengers(passengers > 1 ? passengers - 1 : 1)}
                >-</button>
                <span className="px-7">{passengers}</span>
                <button
                  type="button"
                  className="bg-gray-200 px-4 py-2 border border-gray-300 focus:outline-none hover:bg-gray-300 transition duration-150 ease-in-out"
                  onClick={() => setPassengers(passengers + 1)}
                >+</button>
              </div>
            </div>

            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="block text-gray-500 mb-2">Horaires</label>
              <div className="flex flex-col">
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    name="matin"
                    checked={horaires.matin}
                    onChange={handleCheckboxChange}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Matin</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    name="apresMidi"
                    checked={horaires.apresMidi}
                    onChange={handleCheckboxChange}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Après-Midi</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    name="soir"
                    checked={horaires.soir}
                    onChange={handleCheckboxChange}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Soir</span>
                </label>
              </div>
            </div>

            <div className="flex items-center flex-shrink-0 w-full md:w-auto mt-6">
              <button
                type="submit"
                className="flex items-center justify-center bg-green-500 text-white p-3 rounded-md focus:outline-none hover:bg-green-600 transition duration-300"
                style={{ height: '48px', width: '48px' }}
              >
                <FaSearch className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Place/>
    </>
  );
};

export default Reserve;
