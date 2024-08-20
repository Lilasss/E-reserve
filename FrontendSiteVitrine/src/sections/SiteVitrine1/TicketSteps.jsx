import React from 'react';
import backgroundImage from '../../pages/PageUser/assets/show.jpg'; 

const TicketSteps = () => {
  return (
    <div className="bg-cover bg-center text-white py-12" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center text-2xl font-bold mb-8">COMMENT ACHETER VOTRE TICKET ?</div>
      <div className="flex justify-center space-x-12">
        <div className="flex flex-col items-center">
          <div className="bg-gray-900 bg-opacity-50 p-4 rounded-full">
            <i className="fas fa-calendar-alt text-yellow-500 text-4xl"></i>
          </div>
          <div className="mt-4">Réservation de billets</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-900 bg-opacity-50 p-4 rounded-full">
            <i className="fas fa-check-square text-yellow-500 text-4xl"></i>
          </div>
          <div className="mt-4">Confirmation de la commande</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-900 bg-opacity-50 p-4 rounded-full">
            <i className="fas fa-credit-card text-yellow-500 text-4xl"></i>
          </div>
          <div className="mt-4">Paiement</div>
        </div>
      </div>
    </div>
  );
};

export default TicketSteps;
