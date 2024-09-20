import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Place from '../../Place';
import SeatSelections from './SeatSelections';

const Step1 = ({ handleNext }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const transportData = location.state?.transportData;

    if (!transportData) {
        return <p>Les données du transport ne sont pas disponibles</p>;
    }

    const { lieu_depart, lieu_arriver, date_depart, heure_depart, prix } = transportData;

    const [quantity, setQuantity] = useState(1);

    const handleCancel = () => {
        navigate('/transports');
    };

    const totalAmount = prix * quantity;

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const formData = {
        nombre_place: 22,
    };

    return (
        <>
            <Place />
            <div className="p-6">
                <div className="w-full md:flex md:space-x-4">
                    <div className="w-full md:w-1/2 p-6">
                        <SeatSelections formData={formData} quantity={quantity} onQuantityChange={handleQuantityChange} className="h-auto" />
                    </div>
                    <div className="p-6 w-full md:w-1/2 space-y-4">
                        <h2 className="text-xl font-extrabold text-gray-900 mb-6 border-b-2 mt-6 border-gray-200 pb-2">Détails du Trajet</h2>
                        <p className="text-gray-900 text-base mb-2 font-semibold">
                            {lieu_depart.nom} <span className="text-3xl mx-2 text-blue-500">→</span> {lieu_arriver.nom}
                        </p>
                        <p className="text-gray-600 text-md mb-2">
                            {new Date(date_depart).toLocaleDateString()} à {heure_depart}
                        </p>
                        <p className="text-gray-900 text-lg font-semibold">
                            Prix: <span className="text-green-600">{prix.toLocaleString()} Ar</span>
                        </p>
                        <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6 flex flex-col space-y-4 mt-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex-1">
                                    <div className="text-gray-900 text-lg font-semibold mb-2">Vos places : {quantity}</div>
                                    <div className="text-gray-900 text-lg font-semibold">Montant : <span className="text-green-600">{totalAmount.toLocaleString()} Ar</span></div>
                                </div>
                                <button
                                    onClick={handleCancel}
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                    >
                        Précédent
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        Valider
                    </button>
                </div>
            </div>
        </>
    );
};

export default Step1;