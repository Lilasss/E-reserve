import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = ({ handleNext }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/transports'); // Redirige vers la page des transports
    };

    return (
        <div>
            <div className="overflow-x-auto mt-8">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b-2 px-4 py-2 text-left text-gray-600">Trajet</th>
                            <th className="border-b-2 px-4 py-2 text-left text-gray-600">Catégorie</th>
                            <th className="border-b-2 px-4 py-2 text-left text-gray-600">Place</th>
                            <th className="border-b-2 px-4 py-2 text-left text-gray-600">Prix</th>
                            <th className="border-b-2 px-4 py-2 text-left text-gray-600">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-t px-4 py-2">Voyage</td>
                            <td className="border-t px-4 py-2">Catégorie</td>
                            <td className="border-t px-4 py-2">Place</td>
                            <td className="border-t px-4 py-2">100000</td>
                            <td className="border-t px-4 py-2">100000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-72">
                <button
                    onClick={handleCancel}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                >
                    Annuler
                </button>
                <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Suivant
                </button>
            </div>
        </div>
    );
};

export default Step1;
