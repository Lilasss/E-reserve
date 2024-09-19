import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const Evenement = () => {
    const [startDate, setStartDate] = useState(null); 
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Mes évènements</h1>
            <div className="bg-gray-100 pl-5 p-4 rounded-lg mb-6 flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Titre de l'évènement"
                    className="w-1/2 pl-4 p-2 -ml-6 rounded-3xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <div className="">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full p-2 border border-gray-300 focus:outline-none rounded-sm focus:ring-1 focus:ring-gray-400"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Date de l'évènement"
                    />
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                    Rechercher
                </button>
            </div>
            <Link to="/admin/createevent"><button className="border border-gray-400 px-4 py-2 rounded-md shadow-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4">
                Créer un évènement
            </button>
            </Link>
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-200 text-gray-700">
                    <tr className="border-b border-gray-300">
                        <th className="py-3 px-4 text-left">Date</th>
                        <th className="py-3 px-4 text-left">Photo</th>
                        <th className="py-3 px-4 text-left">Évènement</th>
                        <th className="py-3 px-4 text-left">Billets</th>
                        <th className="py-3 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
        </div>
    );
};

export default Evenement;
