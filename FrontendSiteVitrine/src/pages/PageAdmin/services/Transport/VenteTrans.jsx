import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaPrint } from 'react-icons/fa';

const VenteTrans = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <><div className="p-6 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <select className="appearance-none w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400">
            <option>Transport</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
              placeholderText="Date"
              dateFormat="dd/MM/yyyy"
              className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>
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
      </div>

      <div className="flex justify-start mt-6 space-x-4">
        <button className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
          <FaPrint className="w-4 h-4 mr-2" />
          Imprimer
        </button>
        <div className="flex justify-end">
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none">
            Rechercher
          </button>
        </div>
      </div>
    </div>
      <div className="mt-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-2 px-4">TRANSPORT</th>
              <th className="py-2 px-4">TYPE DE BILLET</th>
              <th className="py-2 px-4">PRIX UNITAIRE</th>
              <th className="py-2 px-4">MONTANT</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div></>
  );
};

export default VenteTrans;
