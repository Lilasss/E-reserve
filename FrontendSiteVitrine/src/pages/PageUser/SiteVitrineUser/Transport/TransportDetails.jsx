import React from 'react';

function TransportDetails({ name, date_depart, heure_depart, lieu_depart, lieu_arriver, nombre_place, prix }) {
    return (
        <div className="w-full max-w-6xl mx-auto my-3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr_auto] gap-4">

            <div className="col-start-1 row-start-1 text-left">
                <p className="text-gray-500 text-lg font-bold">{name}</p>
            </div>

            <div className="col-span-1 row-start-1 text-center">
                <p className="text-gray-700">
                    Départ : <span className="text-lg font-bold">{heure_depart}</span> {new Date(date_depart).toLocaleDateString()}
                </p>
            </div>

            <div className="col-span-3 row-start-2 flex items-center justify-center my-2">
                <div className="mr-4">
                    <p className="text-gray-500">{lieu_depart?.nom || 'Lieu de départ non défini'}</p>
                </div>
                <div className="mx-4 text-2xl">→</div>
                <div className="ml-4">
                    <p className="text-gray-500">{lieu_arriver?.nom || 'Lieu d’arrivée non défini'}</p>
                </div>
            </div>

            <div className="col-span-2 row-start-3 text-center">
                <p className="text-gray-700">
                    Places libres : <span className="text-lg font-bold">{nombre_place}</span>
                </p>
            </div>

            <div className="col-start-1 row-start-3 text-left">
                <h3 className="text-xl font-bold">Ar {prix.toLocaleString()}</h3>
            </div>
        </div>
    );
}

export default TransportDetails;
