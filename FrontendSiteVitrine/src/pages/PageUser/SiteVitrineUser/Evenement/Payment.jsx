import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Info from './Info';
import BarNav from '../BarNav';
import Stepper from './Step';
import { FaCcVisa, FaCreditCard, FaCalendarAlt, FaLock } from 'react-icons/fa';
import Footer from '../../../../layout/Footer';

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { event, quantities, total } = location.state || {};
    const paymentRef = useRef(null);
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvc, setCardCvc] = useState('');

    useEffect(() => {
        if (paymentRef.current) {
            paymentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    if (!event) {
        return <div>Aucune information d'événement disponible.</div>;
    }

    const handlePayment = () => {
        // Redirection vers la page de détails du billet
        navigate('/ticketinfo', { state: { event, quantities, total } });
    };

    return (
        <>
            <div>
                <BarNav />
                <Info event={event} />
                <Stepper activeStep={3} />

                <div ref={paymentRef} className="flex flex-col items-center mt-8 space-y-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <div className="text-lg text-green-800 font-bold">
                        Total de la commande : {total} Ar
                    </div>

                    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
                        <div className="flex items-center space-x-2">
                            <FaCcVisa className="text-blue-600 text-2xl" />
                            <span className="text-lg font-semibold">Paiement par Carte Visa</span>
                        </div>

                        <div className="relative">
                            <FaCreditCard className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="text"
                                placeholder="Numéro de carte"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                            />
                        </div>

                        <div className="flex space-x-4">
                            <div className="relative w-full">
                                <FaCalendarAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type="text"
                                    placeholder="MM/AA"
                                    value={cardExpiry}
                                    onChange={(e) => setCardExpiry(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                                />
                            </div>

                            <div className="relative w-full">
                                <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    value={cardCvc}
                                    onChange={(e) => setCardCvc(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                                />
                            </div>
                        </div>

                        <button
                            className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md focus:outline-none hover:bg-blue-700 transition"
                            onClick={handlePayment}
                        >
                            Confirmer le paiement
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-12">
                <Footer />
            </div>
        </>
    );
}

export default PaymentPage;
