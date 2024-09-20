import React from 'react';

function TransportDetails({ name, date_depart, heure_depart, lieu_depart, lieu_arriver, nombre_place, prix, image_path, onClick }) {
    return (
        <div
            className="w-full max-w-6xl mx-auto my-3 p-6 bg-white border border-gray-200 rounded-lg shadow-lg grid grid-cols-[1fr_auto] gap-4 cursor-pointer transition-transform transition-shadow duration-300 hover:shadow-xl"
            onClick={onClick} 
        >
            <div>
                <div className="text-left">
                    <p className="text-gray-500 text-lg font-bold">{name}</p>
                </div>
                <div className="text-center">
                    <p className="text-gray-700">
                        Départ : <span className="text-lg font-bold">{heure_depart}</span> {new Date(date_depart).toLocaleDateString()}
                    </p>
                </div>

                <div className="flex items-center justify-center my-2">
                    <div className="mr-4">
                        <p className="text-gray-500">{lieu_depart?.nom || 'Lieu de départ non défini'}</p>
                    </div>
                    <div className="mx-4 text-2xl">→</div>
                    <div className="ml-4">
                        <p className="text-gray-500">{lieu_arriver?.nom || 'Lieu d’arrivée non défini'}</p>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-gray-700">
                        Places libres : <span className="text-lg font-bold">{nombre_place}</span>
                    </p>
                </div>

                <div className="text-left">
                    <h3 className="text-xl font-bold">Ar {prix.toLocaleString()}</h3>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={image_path} alt={name} className="w-32 h-32 object-cover rounded-lg" />
            </div>
        </div>
    );
}

export default TransportDetails;
