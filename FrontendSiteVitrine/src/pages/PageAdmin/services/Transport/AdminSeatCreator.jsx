import React, { useState } from "react";
import SeatSelection from "./SeatSelection";

const AdminSeatCreator = () => {
    const [formData, setFormData] = useState({ nombre_place: 16 });  // Nombre de places à créer
    const [createdSeats, setCreatedSeats] = useState([]);

    // Fonction qui reçoit les sièges créés et les stocke
    const handleSeatsCreated = (seats) => {
        setCreatedSeats(seats);
    };

    return (
        <div>
            <h1>Admin - Création des sièges</h1>
            <SeatSelection formData={formData} onSeatsCreated={handleSeatsCreated} prevStep={() => {}} />
            
            {/* Affichage des sièges créés */}
            <div className="mt-10">
                <h2>Sièges créés :</h2>
                {createdSeats.length > 0 ? (
                    <ul>
                        {createdSeats.map((seat) => (
                            <li key={seat.seatNumber}>{seat.seatName}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun siège créé pour le moment.</p>
                )}
            </div>
        </div>
    );
};

export default AdminSeatCreator;
