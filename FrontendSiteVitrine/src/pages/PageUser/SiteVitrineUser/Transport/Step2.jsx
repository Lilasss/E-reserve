import React from 'react';

const Step2 = ({ handleNext, handlePrev }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
      <div className="flex justify-between mt-6">
        <button 
          onClick={handlePrev} 
          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
        >
          Précédent
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

export default Step2;
