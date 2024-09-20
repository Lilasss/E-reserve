import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Place = () => {
    return (
        <div className="bg-white p-4 rounded-md shadow-md w-full max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-green-500"></div>
                    <span className="text-gray-600">Places libres</span>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gray-300"></div>
                    <span className="text-gray-600">Places occupées</span>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-green-500"></div>
                    <span className="text-gray-600">Vos places</span>
                </div>

                <div className="flex items-center space-x-2">
                    <FaUserCircle className="text-green-500" size={20} />
                    <span className="text-gray-600">Chauffeur</span>
                </div>
            </div>
        </div>
    );
};

export default Place;
