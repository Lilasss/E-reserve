import React, { useState } from 'react';
import Select from 'react-select';
import { FaMapMarkerAlt, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

const Reserve = () => {
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [date, setDate] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [horaires, setHoraires] = useState('');

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    setHoraires(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission
  };

  const locations = [
    // Vos options de localisation ici
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
      <div className="pt-0 pb-8 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-7xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-wrap gap-8 items-center text-base relative z-10"
          >
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="block text-gray-500 mb-2 text-base">Lieu de départ</label>
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
              <label className="block text-gray-500 mb-2 text-base">Lieu d'arrivée</label>
              <Select
                styles={customStyles}
                value={arrival}
                onChange={(selectedOption) => setArrival(selectedOption)}
                options={locations}
                formatOptionLabel={formatOptionLabel}
                placeholder="Sélectionner"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-[200px] relative">
              <label className="block text-gray-500 mb-2 text-base">Date</label>
              <div className="relative">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none text-base"
                  placeholderText="Sélectionner une date"
                />
              </div>
            </div>

            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="block text-gray-500 mb-2 text-base">Place</label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="bg-gray-200 px-4 py-2 border border-gray-300 focus:outline-none hover:bg-gray-300 transition ease-in-out text-base"
                  onClick={() => setPassengers(passengers > 1 ? passengers - 1 : 1)}
                >-</button>
                <span className="px-7 text-base">{passengers}</span>
                <button
                  type="button"
                  className="bg-gray-200 px-4 py-2 border border-gray-300 focus:outline-none hover:bg-gray-300 transition duration-150 ease-in-out text-base"
                  onClick={() => setPassengers(passengers + 1)}
                >+</button>
              </div>
            </div>

            <div className="mt-7">
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
    </>
  );
};

export default Reserve;
