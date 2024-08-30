const Stepper = ({ activeStep }) => {
    return (
        <div className="flex items-center justify-center py-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="w-3/4 flex justify-between items-center">
                <div className={`flex flex-col items-center ${activeStep === 1 ? 'text-blue-500' : ''}`}>
                    <div className={`w-14 h-14 flex items-center justify-center ${activeStep === 1 ? 'bg-blue-500' : 'bg-gray-400'} text-white rounded-full border-8 ${activeStep === 1 ? 'border-blue-200' : 'border-gray-200'}`}>
                        1
                    </div>
                    <p className="mt-2 text-sm">RÉSERVATION DE BILLETS</p>
                </div>
                <div className="flex-auto border-t-2 border-gray-300 mx-2"></div>
                <div className={`flex flex-col items-center ${activeStep === 2 ? 'text-blue-500' : ''}`}>
                    <div className={`w-14 h-14 flex items-center justify-center ${activeStep === 2 ? 'bg-blue-500' : 'bg-gray-400'} text-white rounded-full shadow-md border-8 ${activeStep === 2 ? 'border-blue-200' : 'border-gray-200'}`}>
                        2
                    </div>
                    <p className="mt-2 text-sm">CONFIRMATION</p>
                </div>
                <div className="flex-auto border-t-2 border-gray-300 mx-2"></div>
                <div className={`flex flex-col items-center ${activeStep === 3 ? 'text-blue-500' : ''}`}>
                    <div className={`w-14 h-14 flex items-center justify-center ${activeStep === 3 ? 'bg-blue-500' : 'bg-gray-400'} text-white rounded-full border-8 ${activeStep === 3 ? 'border-blue-200' : 'border-gray-200'}`}>
                        3
                    </div>
                    <p className="mt-2 text-sm">PAIEMENT</p>
                </div>
            </div>
        </div>
    );
};

export default Stepper;
