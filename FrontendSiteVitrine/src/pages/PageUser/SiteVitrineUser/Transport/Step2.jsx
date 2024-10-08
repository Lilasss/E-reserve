import React from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const Step2 = ({ handleNext, handlePrev }) => {
    return (
        <div>
            <div className="flex justify-center space-x-2 mt-8">
                <div className="flex-1 max-w-md shadow-md p-6">
                    <h3 className="text-xl font-semibold text-center text-[#5F91CC] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Informations personnelles</h3>
                    <div className="space-y-6">
                        <div className="relative flex items-center">
                            <FaUser className="text-blue-500 absolute left-3" />
                            <input
                                type="text"
                                placeholder="Nom"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                            />
                        </div>
                        <div className="relative flex items-center">
                            <FaEnvelope className="text-blue-500 absolute left-3" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                            />
                        </div>
                        <div className="relative flex items-center">
                            <FaPhone className="text-blue-500 absolute left-3" />
                            <input
                                type="tel"
                                placeholder="Téléphone"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-20">
                <button
                    onClick={handlePrev}
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
                    Précédent
                </button>
                <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Suivant
                </button>
            </div>
        </div>
    );
};

export default Step2;
