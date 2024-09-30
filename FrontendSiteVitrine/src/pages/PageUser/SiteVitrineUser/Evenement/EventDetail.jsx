import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import flyerImage from '../../assets/flyer.jpeg';
import educationImage from '../../assets/Education.jpeg';
import carnavalImage from '../../assets/Culture.jpeg';
import BarNav from '../BarNav';
import Stepper from './Step';
const eventsData = {
    1: {
        name: 'KODO',
        image: flyerImage,
        type: 'Cultures',
        lieu: 'Antananarivo',
        date: '2024-09-30T18:00:00',
        description: "Cet événement met en lumière les cultures locales à travers des performances artistiques et des expositions.",
        tickets: [
            { name: 'Normal', price: 30000 },
            { name: 'VIP', price: 50000 },
        ]
    },
    2: {
        name: 'Conférence internationale',
        image: educationImage,
        type: 'Éducation',
        lieu: 'Toamasina',
        date: '2024-10-12T09:00:00',
        description: "Une conférence rassemblant des experts du monde entier pour discuter des avancées en éducation.",
        tickets: [
            { name: 'Normal', price: 25000 },
            { name: 'VIP', price: 50000 },

        ]
    },

    3: {
        name: 'Carnaval',
        image: carnavalImage,
        type: 'Spectacles',
        lieu: 'Toamasina',
        date: '2024-09-25T09:00:00',
        description: "Carnaval , évènement organisé par ...",
        tickets: [
            { name: 'Normal', price: 20000 },
            { name: 'VIP', price: 25000 },

        ]
    }


};

function TicketOptions({ ticket, quantity, setQuantity }) {
    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mt-4">
            <div className="text-lg text-gray-800">{ticket.name}</div>
            <div className="text-lg font-semibold text-gray-800">{`${ticket.price.toLocaleString()} Ar`}</div>
            <div className="flex items-center">
                <button
                    onClick={handleDecrement}
                    className="px-2 py-1 text-gray-800 border border-gray-300 rounded-l-md focus:outline-none"
                >
                    -
                </button>
                <input
                    type="text"
                    readOnly
                    value={quantity}
                    className="w-12 text-center border-t border-b border-gray-300 focus:outline-none text-black"
                />
                <button
                    onClick={handleIncrement}
                    className="px-2 py-1 text-gray-800 border border-gray-300 rounded-r-md focus:outline-none"
                >
                    +
                </button>
            </div>
        </div>
    );
}

function EventDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = eventsData[id];
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [quantities, setQuantities] = useState(
        event.tickets.map(() => 0)
    );

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

    const total = quantities.reduce(
        (sum, quantity, index) => sum + quantity * event.tickets[index].price,
        0
    );

    const handleValidate = () => {
        navigate('/confirmation', { state: { event, quantities, total } });
    };

    if (!event) {
        return <div>Événement non trouvé</div>;
    }

    return (
        <>
            <BarNav />
            <div className="container mx-auto my-16 px-9">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8 bg-gray-900 shadow-lg text-white">
                    <img
                        src={event.image}
                        alt={event.type}
                        className="w-full lg:w-1/3 shadow-lg object-cover"
                    />
                    <div className="lg:w-1/2 mt-8 lg:mt-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <h2 className="text-3xl font-bold mb-2 text-white">{event.name}</h2>
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
            </div>
            <Stepper activeStep={1} />

            <div className="container mx-auto my-16 px-0 text-white">
                <div className="flex justify-center lg:flex-row gap-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <div className="bg-white p-6 shadow-lg w-full lg:w-1/2">
                        <h2 className="text-lg text-black mb-4">TYPE DE BILLETS</h2>
                        {event.tickets.map((ticket, index) => (
                            <TicketOptions
                                key={index}
                                ticket={ticket}
                                quantity={quantities[index]}
                                setQuantity={(newQuantity) => {
                                    setQuantities(prevQuantities => {
                                        const newQuantities = [...prevQuantities];
                                        newQuantities[index] = newQuantity;
                                        return newQuantities;
                                    });
                                }}
                            />
                        ))}
                        <div className="flex justify-between items-center mt-8">
                            <span className="text-lg text-black font-semibold">
                                Total: {total.toLocaleString()} Ar
                            </span>
                            <button
                                onClick={handleValidate}
                                className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md focus:outline-none hover:bg-yellow-600"
                            >
                                Valider
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventDetail;
