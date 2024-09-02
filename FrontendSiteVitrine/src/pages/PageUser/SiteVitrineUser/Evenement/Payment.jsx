import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Info from './Info';
import BarNav from '../BarNav';
import Stepper from './Step';
import { FaCcVisa } from 'react-icons/fa'; // Assurez-vous que cette ligne est correcte
import Footer from '../../../../layout/Footer';

function PaymentPage() {
    const location = useLocation();
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
        // Implémentez ici la logique pour le paiement
        alert('Paiement confirmé');
    };

    return (
        <><div>
            <BarNav />
            <Info event={event} />
            <Stepper activeStep={3} />

            <div ref={paymentRef} className="flex flex-col items-center mt-8 space-y-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className="text-lg font-bold">
                    Total de la commande : {total} Ar
                </div>

                <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                        <FaCcVisa className="text-blue-500 text-3xl" />
                        <span className="text-lg font-semibold">Paiement par Carte Visa</span>
                    </div>

                    <input
                        type="text"
                        placeholder="Numéro de carte"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            placeholder="MM/AA"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="text"
                            placeholder="CVC"
                            value={cardCvc}
                            onChange={(e) => setCardCvc(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md focus:outline-none hover:bg-yellow-600"
                        onClick={handlePayment}
                    >
                        Confirmer le paiement
                    </button>
                </div>
            </div>
        </div><div className="pt-12"><Footer /></div>
        </>

    );
}

export default PaymentPage;
