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

    const { lieuDepart, lieuArriver, dateDepart, heureDepart, prix, nombrePlace, reservedSeats } = transportData;

    const [selectedSeats, setSelectedSeats] = useState([]);

    // Calculate the total amount based on the selected seats
    const totalAmount = prix * selectedSeats.length;

    const handleCancel = () => {
        setSelectedSeats([]); // Reset selected seats
        navigate('/transports');
    };

    const handleSeatSelect = (selectedSeatNumbers) => {
        setSelectedSeats(selectedSeatNumbers);
    };

    const handleContinue = () => {
        // Save the selected seats and price to localStorage
        const reservationDetails = {
            place: selectedSeats,
            price: prix // Assuming `prix` is the unit price per seat
        };
        localStorage.setItem('reservationDetails', JSON.stringify(reservationDetails));

        // Reset selected seats after saving
        setSelectedSeats([]);

        // Call handleNext and pass selected seats (or other needed data)
        handleNext(selectedSeats);
    };

    return (
        <>
            <Place />
            <div className="p-6">
                <div className="w-full md:flex md:space-x-4">
                    <div className="w-full md:w-1/2 p-6">
                        <SeatSelections
                            nombrePlace={nombrePlace}
                            reservedSeats={reservedSeats} // Pass reserved seats
                            onSeatSelect={handleSeatSelect}
                            className="h-auto"
                        />
                    </div>
                    <div className="p-6 w-full md:w-1/2 space-y-4">
                        <h2 className="text-xl font-extrabold text-gray-900 mb-6 border-b-2 mt-6 border-gray-200 pb-2">
                            Détails du Trajet
                        </h2>
                        <p className="text-gray-900 text-base mb-2">
                            {lieuDepart} <span className="text-3xl mx-2 text-blue-500">→</span> {lieuArriver}
                        </p>
                        <p className="text-gray-600 text-md mb-2">
                            {new Date(dateDepart).toLocaleDateString()} à {heureDepart}
                        </p>
                        <p className="text-gray-900 text-lg font-semibold">
                            Prix: <span className="text-green-600">{prix.toLocaleString()} Ar</span>
                        </p>
                        <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6 flex flex-col space-y-4 mt-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex-1">
                                    <div className="text-gray-900 text-lg font-semibold mb-2">
                                        Vos places : {selectedSeats.length}
                                    </div>
                                    <div className="text-gray-900 text-lg font-semibold">
                                        Montant : <span className="text-green-600">{totalAmount.toLocaleString()} Ar</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={handleContinue}
                                className={`px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors ${selectedSeats.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={selectedSeats.length === 0}
                            >
                                Continuer
                            </button>
                        </div>

                        <div className="mt-4">
                            <button
                                onClick={handleCancel}
                                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step1;
