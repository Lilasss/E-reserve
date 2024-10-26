import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaUser } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Charger la clé publique Stripe
const stripePromise = loadStripe("pk_test_51Q0JBGKRZ1jB7FLUqC6TlhAAoOmWyZMJAeFPvjhqZrZUHtG1Aw6gkKL7G1jiqo9acHHDPPQt1Vn1BDKJY8xYWQoC00Pg0QZf99");

const Step3 = ({ handlePrev }) => {
    const [isToggled, setIsToggled] = useState(false);
    const [email, setEmail] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Envoyer le token à ton backend
        const { token, error } = await stripe.createToken(cardElement);
        if (!error) {
            await axios.post("http://localhost:8080/api/payment/charge","", {
                headers: {
                    token: token.id,
                    amount: 500,  // Le montant doit être en centimes (ex. 500 = 5.00€)
                }
            }).then(() => {
                alert("Payment Success");
            }).catch((err) => {
                alert(err.response?.data || "Payment Failed");
            });
        } else {
            console.error(error);
            alert("Erreur lors de la génération du token Stripe.");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                        <FaCcVisa className="text-blue-600 text-3xl" />
                        <FaCcMastercard className="text-red-600 text-3xl" />
                        <FaCcAmex className="text-green-600 text-3xl" />
                    </div>
                    <span className="text-[#5F91CC] text-sm">Choisissez votre mode de paiement</span>
                </div>

                {/* Champ pour l'email */}
                <div className="relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-gray-500 focus:ring-opacity-10 focus:ring-1"
                    />
                    <FaUser className="text-gray-500 absolute left-3 top-4 text-lg" />
                </div>

                {/* Stripe CardElement pour capturer les informations de la carte */}
                <div className="relative">
                    <CardElement 
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none" 
                        options={{ hidePostalCode: true }}  // Désactiver le code postal
                    />
                </div>

                <div className="flex items-center mt-6">
                    <label className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className="toggle-checkbox hidden"
                            checked={isToggled}
                            onChange={handleToggle}
                        />
                        <div className={`toggle-switch ${isToggled ? 'bg-blue-600' : 'bg-gray-300'} w-10 h-6 flex items-center rounded-full p-1 cursor-pointer`}>
                            <div className={`dot ${isToggled ? 'translate-x-4' : 'translate-x-0'} bg-white w-4 h-4 rounded-full shadow-md transform duration-300`}></div>
                        </div>
                        <span className="text-[#5F91CC]">Envoyer le billet par Email</span>
                    </label>
                </div>

                <div className="flex justify-between mt-14">
                    <button
                        onClick={handlePrev}
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                    >
                        Précédent
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                        Confirmer
                    </button>
                </div>
            </form>
        </div>
    );
};

// Emballer le composant dans Elements pour Stripe
const PaymentForm = ({ handlePrev }) => (
    <Elements stripe={stripePromise}>
        <Step3 handlePrev={handlePrev} />
    </Elements>
);

export default PaymentForm;
