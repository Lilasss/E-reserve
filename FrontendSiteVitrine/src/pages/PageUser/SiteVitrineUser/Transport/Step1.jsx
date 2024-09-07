import React from 'react';

const Step1 = ({ handleNext, handleCancel }) => {
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
                            <td className="border-t px-4 py-2">Exemple Voyage</td>
                            <td className="border-t px-4 py-2">Exemple Catégorie</td>
                            <td className="border-t px-4 py-2">Exemple Place</td>
                            <td className="border-t px-4 py-2">100€</td>
                            <td className="border-t px-4 py-2">100€</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-6">
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
