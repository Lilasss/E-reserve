import React from 'react';

const TicketTransport = ({
    serviceName,
    transportType,
    date,
    time,
    departure,
    arrival,
    clientName,
    clientId,
    seatNumber,
    price
}) => {
    const transportColor = transportType === "Train" ? "#1D4ED8" : "#FACC15"; 
    return (
        <div
            className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 flex"
            style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            <div className="w-2/3">
                <div className="grid grid-cols-2 gap-4 p-4 bg-[#0A5DA6]">
                    <h2 className="text-xl font-semibold mb-2" style={{ color: transportColor }}>
                        {transportType === "Train" ? "🚆 Train" : "🚌 Taxi-brousse"}
                    </h2>
                    <h2 className="text-xl font-bold text-[#FACC15]">
                        COTISSE {serviceName}
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-4 p-6 bg-[#f9f9f9]">
                    <div>
                        <p className="text-[#2E2E2E] font-semibold">
                            NOM DU PASSAGER : <span className="font-medium">{clientName}</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-[#2E2E2E] font-semibold">
                            ID CLIENT : <span className="font-medium">{clientId}</span>
                        </p>
                    </div>

                    <hr className="col-span-2 my-2 border-gray-300" />
                    <div>
                        <p className="text-[#2E2E2E] font-semibold">De :</p>
                        <p className="font-medium">{departure}</p>
                    </div>
                    <div>
                        <p className="text-[#2E2E2E] font-semibold">A :</p>
                        <p className="font-medium">{arrival}</p>
                    </div>
                    <hr className="col-span-2 my-2 border-gray-300" />
                    <div>
                        <p className="text-[#2E2E2E] font-semibold">
                            Date : <span className="font-medium">{date}</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-[#2E2E2E] font-semibold">
                            Heure : <span className="font-medium">{time}</span>
                        </p>
                    </div>
                    <hr className="col-span-2 my-2 border-gray-300" />
                    <div>
                        <p className="text-[#2E2E2E] font-semibold">
                            Nombre de Sièges : <span className="font-medium">{seatNumber}</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-[#2E2E2E] font-semibold">
                            Prix : <span className="font-bold text-lg">{price} Ar</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-px border-dashed border-2 border-[#0A5DA6]"></div>

            <div className="w-1/3 bg-[#0A5DA6] flex items-center justify-center p-4">
                <div className="w-48 h-48 border-dashed border-2 border-gray-300 flex items-center justify-center rounded-lg ">
                    <p className="text-gray-400">QR Code</p>
                </div>
            </div>
        </div>
    );
};

export default TicketTransport;
