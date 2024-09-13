import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const SeatSelection = ({ formData, prevStep }) => {
    const [seats, setSeats] = useState(
        Array.from({ length: formData.nombre_place }, (_, index) => ({
            seatNumber: index + 1,
            seatName: `Seat ${index + 1}`,
            isSelected: false,
        }))
    );

    const handleSeatClick = (index) => {
        const newSeats = seats.map((seat, i) =>
            i === index ? { ...seat, isSelected: !seat.isSelected } : seat
        );
        setSeats(newSeats);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Seats: ", seats.filter((seat) => seat.isSelected));
    };

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-6">Sélectionnez les sièges</h2>

            <form onSubmit={handleSubmit}>
                <div className="max-w-60 mt-10">

                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="w-12 h-12 flex items-center justify-center">
                            <FaUserCircle className="text-gray-600 text-3xl" />
                        </div>
                        <div></div>

                        {seats.slice(0, 2).map((seat, index) => (
                            <div
                                key={index}
                                onClick={() => handleSeatClick(index)}
                                className={`w-12 h-12 border-2 border-green-500 rounded-lg flex items-center justify-center cursor-pointer 
                                    ${seat.isSelected ? "bg-green-500 text-white" : "text-green-500"}`}
                            >
                                {seat.seatNumber}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {seats.slice(2).map((seat, index) => (
                            <div
                                key={index}
                                onClick={() => handleSeatClick(index + 2)}
                                className={`w-12 h-12 border-2 border-green-500 rounded-lg flex items-center justify-center cursor-pointer 
                                    ${seat.isSelected ? "bg-green-500 text-white" : "text-green-500"}`}
                            >
                                {seat.seatNumber}
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
