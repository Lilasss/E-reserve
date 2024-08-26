import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import flyerImage from '../../assets/flyer.jpeg';
import educationImage from '../../assets/Education.jpeg';
import BarNav from '../BarNav';

const eventsData = {
    1: {
        name: 'KODO',
        image: flyerImage,
        type: 'Cultures',
        lieu: 'Antananarivo',
        date: '2024-08-25T18:00:00',
        description: "Cet événement met en lumière les cultures locales à travers des performances artistiques et des expositions.",
    },
    2: {
        name: 'Conférence internationale',
        image: educationImage,
        type: 'Éducation',
        lieu: 'Toamasina',
        date: '2024-09-12T09:00:00',
        description: "Une conférence rassemblant des experts du monde entier pour discuter des avancées en éducation.",
    },
};

function EventDetail() {
    const { id } = useParams();
    const event = eventsData[id];
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const eventDate = new Date(event.date).getTime();
            const now = new Date().getTime();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [event.date]);

    if (!event) {
        return <div>Événement non trouvé</div>;
    }

    return (
        <>
            <BarNav />

            <div className="container mx-auto my-16 px-9 text-white">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8 bg-gray-900 shadow-lg">
                    <img
                        src={event.image}
                        alt={event.type}
                        className="w-full lg:w-1/3 shadow-lg object-cover"
                    />
                    <div className="lg:w-1/2 mt-8 lg:mt-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <h2 className="text-3xl font-bold mb-2 text-white">
                            {event.name}
                        </h2>
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
                                <strong>Date:</strong>{' '}
                                {new Date(event.date).toLocaleDateString('fr-FR')}
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaClock className="text-xl mr-2" />
                            <p className="text-lg">
                                <strong>Heure:</strong>{' '}
                                {new Date(event.date).toLocaleTimeString('fr-FR', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </p>
                        </div>
                        <div className="mt-8 text-center lg:space-x-40">
                            <h3 className="text-2xl font-semibold mb-4"></h3>
                            <div className="flex justify-center space-x-4 text-lg">
                                <div className="flex flex-col items-center border border-white px-8 py-4 rounded-lg bg-gray-800">
                                    <p className="text-4xl font-bold">{countdown.days}</p>
                                    <p className="uppercase">Jours</p>
                                </div>
                                <div className="flex flex-col items-center border border-white px-8 py-4 rounded-lg bg-gray-800">
                                    <p className="text-4xl font-bold">{countdown.hours}</p>
                                    <p className="uppercase">Heures</p>
                                </div>
                                <div className="flex flex-col items-center border border-white px-8 py-4 rounded-lg bg-gray-800">
                                    <p className="text-4xl font-bold">{countdown.minutes}</p>
                                    <p className="uppercase">Minutes</p>
                                </div>
                                <div className="flex flex-col items-center border border-white px-8 py-4 rounded-lg bg-gray-800">
                                    <p className="text-4xl font-bold">{countdown.seconds}</p>
                                    <p className="uppercase">Secondes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{event.name}</h2>
                    <p className="text-lg text-gray-600">{event.description}</p>
                </div>

                <div className="flex flex-col lg:flex-row mt-8 gap-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/2">
                        <h2 className="text-lg text-black mb-4">PLAN DE SITE</h2>
                        <p className="text-gray-600 text-xs text-center">Plan de salle non disponible</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/2">
                        <h2 className="text-lg text-black mb-4">TYPE DE BILLETS</h2>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600"></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default EventDetail;
