import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const SeatSelection = ({ formData, prevStep }) => {
    const excludedSeats = [9, 13, 17,21,25]; // Sièges à exclure (allée des passagers), mais pas les sièges du fond

    // Générer les sièges avec réaffectation des numéros, tout en préservant les 4 sièges du fond
    const generateSeats = () => {
        let seats = [];
        let currentSeatNumber = 1;
        const lastFourStartIndex = formData.nombre_place - 3; // Index des 4 derniers sièges

        for (let i = 1; i <= formData.nombre_place; i++) {
            if (excludedSeats.includes(i) && i < lastFourStartIndex) {
                // Siège exclu dans l'allée, mais pas dans les 4 derniers
                seats.push({
                    seatNumber: i,
                    seatName: `Empty`,
                    isExcluded: true
                });
            } else {
                // Siège normal ou préservé
                seats.push({
                    seatNumber: currentSeatNumber,
                    seatName: `Seat ${currentSeatNumber}`,
                    isSelected: false,
                    isExcluded: false
                });
                currentSeatNumber++;
            }
        }
        return seats;
    };

    const [seats, setSeats] = useState(generateSeats);

    const handleSeatClick = (index) => {
        if (!seats[index].isExcluded) {
            const newSeats = seats.map((seat, i) =>
                i === index ? { ...seat, isSelected: !seat.isSelected } : seat
            );
            setSeats(newSeats);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Seats: ", seats.filter((seat) => seat.isSelected && !seat.isExcluded));
    };

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-6">Sélectionnez les sièges</h2>

            <form onSubmit={handleSubmit}>
                <div className="max-w-60 mt-10">

                    {/* Première ligne pour le chauffeur */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <FaUserCircle className="text-gray-600 text-3xl" /> {/* Siège du chauffeur */}
                        </div>
                        <div></div>

                        {/* Sièges 1 et 2 */}
                        {seats.slice(0, 2).map((seat, index) => (
                            <div
                                key={index}
                                onClick={() => handleSeatClick(index)}
                                className={`w-12 h-12 border-2 ${seat.isExcluded ? 'border-gray-300' : 'border-green-500'} rounded-lg flex items-center justify-center cursor-pointer 
                                    ${seat.isSelected ? "bg-green-500 text-white" : seat.isExcluded ? 'bg-gray-300' : "text-green-500"}`}
                            >
                                {seat.isExcluded ? '' : seat.seatNumber}
                            </div>
                        ))}
                    </div>

                    {/* Grille de sièges */}
                    <div className="grid grid-cols-4 gap-4">
                        {seats.slice(2).map((seat, index) => (
                            <div
                                key={index + 2}
                                onClick={() => handleSeatClick(index + 2)}
                                className={`w-12 h-12 border-2 ${seat.isExcluded ? 'border-gray-300' : 'border-green-500'} rounded-lg flex items-center justify-center cursor-pointer 
                                    ${seat.isSelected ? "bg-green-500 text-white" : seat.isExcluded ? 'bg-gray-300' : "text-green-500"}`}
                            >
                                {seat.isExcluded ? '' : seat.seatNumber}
                            </div>
                        ))}
                    </div>

                </div>

                <div className="flex justify-between mt-6">
                    <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-600 text-white font-semibold p-3 rounded-lg hover:bg-gray-700"
                    >
                        Précédent
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-white font-semibold p-3 rounded-lg hover:bg-green-700"
                    >
                        Valider les sièges
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SeatSelection;
