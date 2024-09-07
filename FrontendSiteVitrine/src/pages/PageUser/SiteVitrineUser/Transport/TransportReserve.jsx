import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import BarNav from '../BarNav';


const TransportReserve = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleCancel = () => {
        console.log('Réservation annulée');
    };

    return (
        <>
            <BarNav />
            <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md mt-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="p-0 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className="relative flex items-center justify-between mb-6 mt-2">
                    <div className="absolute top-6 left-6 right-0 max-w-4xl h-0.5 bg-gray-300 z-0"></div>
                    <div className={`relative z-10 flex flex-col items-center ${currentStep === 1 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${currentStep === 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white'}`}>
                            1
                        </div>
                        <span className="mt-2 text-sm">Réservation</span>
                    </div>

                    <div className={`relative z-10 flex flex-col items-center ${currentStep === 2 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${currentStep === 2 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white'}`}>
                            2
                        </div>
                        <span className="mt-2 text-sm">Confirmation</span>
                    </div>

                    <div className={`relative z-10 flex flex-col items-center ${currentStep === 3 ? 'text-blue-600' : 'text-gray-500'}`}>
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${currentStep === 3 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white'}`}>
                            3
                        </div>
                        <span className="mt-2 text-sm">Paiement</span>
                    </div>
                </div>
            </div>
                {currentStep === 1 && <Step1 handleNext={handleNext} handleCancel={handleCancel} />}
                {currentStep === 2 && <Step2 handleNext={handleNext} handlePrev={handlePrev} />}
                {currentStep === 3 && <Step3 handlePrev={handlePrev} />}
            </div>
        </>
    );
};

export default TransportReserve;
