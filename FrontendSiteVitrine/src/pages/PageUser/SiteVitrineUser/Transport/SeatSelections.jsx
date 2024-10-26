import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

const SeatSelections = ({ nombrePlace, onSeatSelect }) => {
    const excludedSeats = [9, 13, 17, 21, 25]; // Sièges à exclure (allée des passagers)
    const [reservedSeats, setReservedSeats] = useState([]);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Retrieve selected transport ID from sessionStorage
    const selectedTransport = JSON.parse(sessionStorage.getItem("selectedTransport"));
    const transportId = selectedTransport?.id;

    // Fetch reserved seats from the backend API when the component mounts
    useEffect(() => {
        const fetchReservedSeats = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/sold-seats/reservation/${transportId}`);
                // Remove duplicates and filter valid seat numbers
                const uniqueReservedSeats = Array.from(new Set(response.data)).filter(seat => seat > 0 && seat <= nombrePlace);
                setReservedSeats(uniqueReservedSeats);
            } catch (error) {
                console.error("Erreur lors de la récupération des sièges réservés :", error);
            }
        };
        if (transportId) {
            fetchReservedSeats();
        }
    }, [transportId, nombrePlace]);

    // Generate seat layout with reserved seats marked
    useEffect(() => {
        const generateSeats = () => {
            let seatsArray = [];
            const lastFourStartIndex = nombrePlace - 3;

            for (let i = 1; i <= nombrePlace; i++) {
                const isReserved = reservedSeats.includes(i);  // Check if the seat is reserved
                const isExcluded = excludedSeats.includes(i) && i < lastFourStartIndex;

                seatsArray.push({
                    seatNumber: i,  // Using `i` as the seat number directly
                    seatName: `Seat ${i}`,
                    isSelected: false,
                    isExcluded,
                    isReserved,
                });
            }
            setSeats(seatsArray);
        };

        generateSeats();
    }, [nombrePlace, reservedSeats]);

    // Handle seat selection
    const handleSeatClick = (index) => {
        if (!seats[index].isExcluded && !seats[index].isReserved) {
            const newSeats = seats.map((seat, i) =>
                i === index ? { ...seat, isSelected: !seat.isSelected } : seat
            );

            setSeats(newSeats);
            const selectedSeatNumbers = newSeats
                .filter((seat) => seat.isSelected && !seat.isExcluded)
                .map((seat) => seat.seatNumber);

            setSelectedSeats(selectedSeatNumbers);
        }
    };

    useEffect(() => {
        onSeatSelect(selectedSeats);
        localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    }, [selectedSeats, onSeatSelect]);

    const getSelectedSeatsCount = () => {
        // Count only non-excluded selected seats
        return seats.filter((seat) => seat.isSelected && !seat.isExcluded).length;
    };

    return (
        <div className="max-w-4xl mx-auto mt-1">
            <div className="max-w-60">
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <FaUserCircle className="text-gray-600 text-3xl" /> {/* Chauffeur */}
                    </div>
                    <div></div>
                    {seats.slice(0, 2).map((seat, index) => (
                        <div
                            key={index}
                            onClick={() => handleSeatClick(index)}
                            className={`w-12 h-12 border-2 ${
                                seat.isReserved ? 'bg-gray-300 text-white' :
                                seat.isExcluded ? 'border-gray-300 bg-gray-300' : 
                                seat.isSelected ? 'bg-green-500 text-white' : 'border-green-500 text-green-500'
                            } rounded-lg flex items-center justify-center cursor-pointer`}
                        >
                            {!seat.isExcluded && seat.seatNumber}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {seats.slice(2).map((seat, index) => (
                        <div
                            key={index + 2}
                            onClick={() => handleSeatClick(index + 2)}
                            className={`w-12 h-12 border-2 ${
                                seat.isReserved ? 'bg-gray-300 text-white border-red-400' :
                                seat.isExcluded ? 'border-gray-300 bg-gray-300' : 
                                seat.isSelected ? 'bg-green-500 text-white' : 'border-green-500 text-green-500'
                            } rounded-lg flex items-center justify-center cursor-pointer`}
                        >
                            {!seat.isExcluded && seat.seatNumber}
                        </div>
                    ))}
                </div>

                <div className="mt-4 text-center">
                    <span className="text-lg font-bold">
                        Nombre de sièges sélectionnés : {getSelectedSeatsCount()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SeatSelections;
