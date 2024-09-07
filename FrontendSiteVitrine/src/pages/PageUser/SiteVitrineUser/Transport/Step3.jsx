import React from 'react';

const Step3 = ({ handlePrev }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Paiement</h2>
      <div className="flex justify-between mt-6">
        <button 
          onClick={handlePrev} 
          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
        >
          Précédent
        </button>
        <button 
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default Step3;