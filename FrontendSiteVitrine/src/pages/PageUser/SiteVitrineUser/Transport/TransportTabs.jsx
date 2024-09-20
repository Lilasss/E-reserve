import React, { useState, useEffect } from 'react';
import { FaTrain, FaBus } from 'react-icons/fa';
import TransportDetails from './TransportDetails';
import { useNavigate } from 'react-router-dom';

import cotisseImage from '../../assets/transport/cotisse.jpeg';
import soatransImage from '../../assets/transport/soatrans.jpg';
import garabeImage from '../../assets/transport/garabe.jpeg';
import gareImage from '../../assets/transport/gara.jpeg';

const taxiBrousseData = [
    {
        name: 'Cotisse',
        date_depart: '2024-09-28',
        heure_depart: '08:00',
        lieu_depart: { nom: 'Antananarivo' },
        lieu_arriver: { nom: 'Fianarantsoa' },
        nombre_place: 15,
        prix: 50000,
        image_path: cotisseImage,
    },
    {
        name: 'Soatrans',
        date_depart: '2024-09-30',
        heure_depart: '08:00',
        lieu_depart: { nom: 'Antsirabe' },
        lieu_arriver: { nom: 'Antananarivo' },
        nombre_place: 15,
        prix: 20000,
        image_path: soatransImage,
    },
];

const trainData = [
    {
        name: 'Garabe',
        date_depart: '2024-09-20',
        heure_depart: '14:00',
        lieu_depart: { nom: 'Antananarivo' },
        lieu_arriver: { nom: 'Toamasina' },
        nombre_place: 56,
        prix: 13000,
        image_path: garabeImage,
    },
    {
        name: 'Gare',
        date_depart: '2024-09-24',
        heure_depart: '14:00',
        lieu_depart: { nom: 'Fianarantsoa' },
        lieu_arriver: { nom: 'Manakara' },
        nombre_place: 56,
        prix: 12000,
        image_path: gareImage,
    },
];

const filterResults = (data, { departure, arrival, date }) => {
    return data.filter(item => {
        const matchesDeparture = departure ? item.lieu_depart.nom === departure : true;
        const matchesArrival = arrival ? item.lieu_arriver.nom === arrival : true;
        const matchesDate = date ? new Date(item.date_depart).toDateString() === new Date(date).toDateString() : true;
        return matchesDeparture && matchesArrival && matchesDate;
    });
};

function TransportTabs({ searchParams }) {
    const [activeTab, setActiveTab] = useState('Taxi-brousse');
    const [filteredTaxiBrousseData, setFilteredTaxiBrousseData] = useState(taxiBrousseData);
    const [filteredTrainData, setFilteredTrainData] = useState(trainData);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchParams) {
            setFilteredTaxiBrousseData(filterResults(taxiBrousseData, searchParams));
            setFilteredTrainData(filterResults(trainData, searchParams));
        }
    }, [searchParams]);

    const handleTransportClick = (transportData) => {
        navigate('/transportreserve', { state: { transportData } });
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-6 text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="flex justify-around border-b border-gray-300 relative">
                <div
                    className={`absolute bottom-[-2px] h-0.5 bg-red-500 transition-all duration-300`}
                    style={{ width: 'calc(50% - 8px)', left: activeTab === 'Taxi-brousse' ? '0%' : '50%' }}
                ></div>
                <button
                    onClick={() => setActiveTab('Taxi-brousse')}
                    className={`flex items-center justify-center w-1/2 py-3 ${activeTab === 'Taxi-brousse' ? 'text-blue-900' : 'text-gray-500'}`}
                >
                    <FaBus className="mr-2" size={20} />
                    <span className="block text-base font-bold">Taxi-brousse</span>
                </button>
                <button
                    onClick={() => setActiveTab('Trains')}
                    className={`flex items-center justify-center w-1/2 py-3 ${activeTab === 'Trains' ? 'text-blue-900' : 'text-gray-500'}`}
                >
                    <FaTrain className="mr-2" size={20} />
                    <span className="block text-base font-bold">Trains</span>
                </button>
            </div>

            <div className="mt-4">
                {activeTab === 'Taxi-brousse' && (
                    <div>
                        {filteredTaxiBrousseData.map((item, index) => (
                            <TransportDetails key={index} {...item} onClick={() => handleTransportClick(item)} />
                        ))}
                    </div>
                )}
                {activeTab === 'Trains' && (
                    <div>
                        {filteredTrainData.map((item, index) => (
                            <TransportDetails key={index} {...item} onClick={() => handleTransportClick(item)} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TransportTabs;
