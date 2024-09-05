import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa';
import BarNav from '../BarNav';
import Info from './Info';
import Stepper from './Step';
import Footer from '../../../../layout/Footer';

function Confirmation() {
    const location = useLocation();
    const navigate = useNavigate();
    const { event, quantities, total } = location.state || {};

    const ticketDetails = event.tickets.map((ticket, index) => ({
        ...ticket,
        quantity: quantities[index],
        totalPrice: quantities[index] * ticket.price
    }));

    const handleConfirm = () => {
        navigate('/payment', { state: { event, quantities, total } });
    };

    // Créez une référence pour la section Confirmation de la commande
    const confirmationRef = useRef(null);

    // Utilisez useEffect pour scroller vers la section de confirmation après le montage du composant
    useEffect(() => {
        if (confirmationRef.current) {
            confirmationRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <BarNav />
            <Info event={event} />
            <Stepper activeStep={2} />

            <div ref={confirmationRef} className="container mx-auto py-12 px-6 md:px-12 text-center">
                <div className="flex justify-center items-center mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Informations personnelles</h3>
                        <div className="space-y-6">
                            <div className="relative flex items-center">
                                <FaUser className="text-blue-500 absolute left-3" />
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                                />
                            </div>
                            <div className="relative flex items-center">
                                <FaEnvelope className="text-blue-500 absolute left-3" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                                />
                            </div>
                            <div className="relative flex items-center">
                                <FaPhone className="text-blue-500 absolute left-3" />
                                <input
                                    type="tel"
                                    placeholder="Téléphone"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-white rounded-lg shadow p-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <div className="flex justify-center items-center mb-6">
                            <FaShoppingCart className="text-5xl text-blue-600" />
                        </div>
                        {ticketDetails.map((ticket, index) => (
                            <div
                                key={index}
                                className={`flex justify-between mb-4 pb-2 ${index !== ticketDetails.length - 1 ? 'border-b' : 'border-b border-gray-200'}`}>
                                <span className="text-gray-700">{ticket.name} (x{ticket.quantity})</span>
                                <span className="text-gray-900 font-semibold">{ticket.totalPrice.toLocaleString()} Ar</span>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold text-gray-900 pt-2">
                            <span>Total:</span>
                            <span>{total.toLocaleString()} Ar</span>
                        </div>
                        <button onClick={handleConfirm} className="mt-8 bg-blue-600 text-white font-semibold py-3 px-6  
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Confirmer
                        </button>
                    </div>

                </div>


            </div>
            <Footer />
        </>
    );
}

export default Confirmation;
