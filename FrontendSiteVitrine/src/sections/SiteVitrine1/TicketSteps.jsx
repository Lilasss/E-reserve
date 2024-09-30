import React from 'react';
import backgroundImage from '../../pages/PageUser/assets/télécharger.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TicketSteps = () => {
    return (
        <>
            <div className="relative min-h-72 bg-cover bg-center text-gray-300" style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'scroll' }}>
                <div className="relative z-10 py-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <div className="text-center text-2xl font-bold mb-8">COMMENT ACHETER VOTRE TICKET ?</div>
                    <div className="flex justify-center space-x-52">
                        {['Réservation de billets', 'Confirmation de la commande', 'Paiement'].map((text, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="bg-gray-900 bg-opacity-70 p-6 rounded-full transition-transform transform group-hover:scale-110">
                                    <i className={`fas ${index === 0 ? 'fa-calendar-alt' : index === 1 ? 'fa-check-square' : 'fa-credit-card'} text-yellow-500 text-5xl`}></i>
                                </div>
                                <div className="mt-4">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Couche de fond sombre */}
                <div className="absolute inset-0 bg-slate-950 opacity-50 z-0"></div>
            </div>
        </>
    );
};

export default TicketSteps;
