import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
function Info({ event }) {
    return (
        <><div className="container mx-auto my-16 px-9 text-white">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-8 bg-gray-900 shadow-lg">
                <img
                    src={event.image}
                    alt={event.name}
                    className="w-full lg:w-1/3 shadow-lg object-cover"
                />
                <div className="lg:w-1/2 mt-8 lg:mt-0 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <h2 className="text-3xl font-bold mb-2">{event.name}</h2>
                    <p className="text-yellow-500 border border-yellow-500 rounded-full cursor-pointer px-4 py-2 inline-block mb-6">
                        {event.type}
                    </p>
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-xl mr-2" />
                        <p className="text-lg">
                            <strong>Lieu:</strong> {event.lieu}
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaCalendarAlt className="text-xl mr-2" />
                        <p className="text-lg">
                            <strong>Date:</strong> {new Date(event.date).toLocaleDateString('fr-FR')}
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaClock className="text-xl mr-2" />
                        <p className="text-lg">
                            <strong>Heure:</strong> {new Date(event.date).toLocaleTimeString('fr-FR', {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </p>
                    </div>
                </div>
            </div></div></>
    );
}

export default Info;
