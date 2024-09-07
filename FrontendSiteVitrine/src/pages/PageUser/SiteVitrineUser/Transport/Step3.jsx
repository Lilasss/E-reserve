import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaUser, FaCreditCard, FaCalendarAlt, FaLock } from 'react-icons/fa';

const Step3 = ({ handlePrev }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <form className="space-y-6">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center space-x-2">
                            <FaCcVisa className="text-blue-600 text-3xl" />
                            <FaCcMastercard className="text-red-600 text-3xl" />
                            <FaCcAmex className="text-green-600 text-3xl" />
                        </div>
                        <span className="text-[#5F91CC] text-sm">Choisissez votre mode de paiement</span>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Nom du titulaire"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                            />
                            <FaUser className="text-gray-500 absolute left-3 top-4 text-lg" />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Numéro de carte"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                            />
                            <FaCreditCard className="text-gray-500 absolute left-3 top-4 text-lg" />
                        </div>
                        <div className="flex space-x-4">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Date d'expiration (MM/AA)"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                                />
                                <FaCalendarAlt className="text-gray-500 absolute left-3 top-4 text-lg" />
                            </div>
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Code de sécurité (CVV)"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                                />
                                <FaLock className="text-gray-500 absolute left-3 top-4 text-lg" />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="flex items-center mt-6">
                    <label className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className="toggle-checkbox hidden"
                            checked={isToggled}
                            onChange={handleToggle}
                        />
                        <div className={`toggle-switch ${isToggled ? 'bg-blue-600' : 'bg-gray-300'} w-10 h-6 flex items-center rounded-full p-1 cursor-pointer`}>
                            <div className={`dot ${isToggled ? 'translate-x-4' : 'translate-x-0'} bg-white w-4 h-4 rounded-full shadow-md transform duration-300`}></div>
                        </div>
                        <span className="text-[#5F91CC]">Envoyer le billet par Email</span>
                    </label>
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <button
                    onClick={handlePrev}
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                >
                    Précédent
                </button>
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                >
                    Confirmers
                </button>
            </div>
        </>
    );
};

export default Step3;
