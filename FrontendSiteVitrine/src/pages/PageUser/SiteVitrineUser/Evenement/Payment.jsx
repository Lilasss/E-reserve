import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Info from './Info';
import BarNav from '../BarNav';
import Stepper from './Step';

function PaymentPage() {
    const location = useLocation();
    const { event, quantities, total } = location.state || {};

    // Créez une référence pour la section de confirmation de paiement
    const paymentRef = useRef(null);

    // Utilisez useEffect pour scroller vers la section de paiement après le montage du composant
    useEffect(() => {
        if (paymentRef.current) {
            paymentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    if (!event) {
        return <div>Aucune information d'événement disponible.</div>;
    }

    return (
        <div>
            <BarNav />
            <Info event={event} />
            <Stepper activeStep={3} />

            <div ref={paymentRef} className="flex justify-center mt-8">
                <button
                    className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md focus:outline-none hover:bg-yellow-600 text-2xl"
                    onClick={() => alert('Paiement confirmé')}
                >
                    Confirmer le paiement
                </button>
            </div>
        </div>
    );
}

export default PaymentPage;
