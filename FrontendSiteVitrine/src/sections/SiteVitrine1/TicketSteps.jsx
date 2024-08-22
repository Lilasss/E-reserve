import React from 'react';
import backgroundImage from '../../pages/PageUser/assets/télécharger.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TicketSteps = () => {
    return (
        <>
            
                <div className="relative min-h-72 bg-fixed bg-cover bg-center text-gray-300" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="relative z-10 py-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <div className="text-center text-2xl font-bold mb-8">COMMENT ACHETER VOTRE TICKET ?</div>
                        <div className="flex justify-center space-x-52">
                            <div className="flex flex-col items-center group">
                                <div className="bg-gray-900 bg-opacity-70 p-6 rounded-full transition-transform transform group-hover:scale-110">
                                    <i className="fas fa-calendar-alt text-yellow-500 text-5xl"></i>
                                </div>
                                <div className="mt-4">Réservation de billets</div>
                            </div>
                            <div className="flex flex-col items-center group">
                                <div className="bg-gray-900 bg-opacity-70 p-6 rounded-full transition-transform transform group-hover:scale-110">
                                    <i className="fas fa-check-square text-yellow-500 text-5xl"></i>
                                </div>
                                <div className="mt-4">Confirmation de la commande</div>
                            </div>
                            <div className="flex flex-col items-center group">
                                <div className="bg-gray-900 bg-opacity-70 p-6 rounded-full transition-transform transform group-hover:scale-110">
                                    <i className="fas fa-credit-card text-yellow-500 text-5xl"></i>
                                </div>
                                <div className="mt-4">Paiement</div>
                            </div>
                        </div>
                    </div>

                    {/* Couche de fond sombre */}
                    <div className="absolute inset-0 bg-slate-950 opacity-50 z-0"></div>
                </div>
        </>
    );
};

export default TicketSteps;
