import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import BarNav from '../BarNav';

function TicketInfo() {
    const location = useLocation();
    const { event, quantities, total } = location.state || {};

    if (!event) {
        return <div>Aucune information d'événement disponible.</div>;
    }

    return (
        <>
            <BarNav />
            <div className="container mx-auto my-32 px-64 text-white">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8 bg-gray-900 shadow-lg">
                    <img
                        src={event.image}
                        alt={event.name}
                        className="w-full lg:w-1/3 shadow-lg object-cover"
                    />

                </div>
            </div></>
    );
}

export default TicketInfo;
