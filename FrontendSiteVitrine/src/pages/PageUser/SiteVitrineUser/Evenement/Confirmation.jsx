// Confirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Confirmation() {
    const location = useLocation();
    const { event, quantities, total } = location.state || {};
    
    const ticketDetails = event.tickets.map((ticket, index) => ({
        ...ticket,
        quantity: quantities[index],
        totalPrice: quantities[index] * ticket.price
    }));

    return (
        <div className="container mx-auto my-16 px-9">
            <div className="flex justify-between items-center">
                <div className="w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Confirmation de la Commande</h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Informations Client</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nom</label>
                                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Téléphone</label>
                                <input type="tel" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col items-center">
                    <FaShoppingCart className="text-5xl text-gray-800 mb-4" />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                        <h3 className="text-lg font-semibold mb-4">Détails de la Commande</h3>
                        {ticketDetails.map((ticket, index) => (
                            <div key={index} className="flex justify-between mb-4">
                                <span>{ticket.name} (x{ticket.quantity})</span>
                                <span>MGA {ticket.totalPrice.toLocaleString()}</span>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>MGA {total.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;