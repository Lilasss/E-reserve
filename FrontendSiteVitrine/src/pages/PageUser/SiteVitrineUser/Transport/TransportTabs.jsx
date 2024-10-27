import React, { useState, useEffect } from 'react';
import { FaTrain, FaBus } from 'react-icons/fa';
import TransportDetails from './TransportDetails';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const filterResults = (data, { departure, arrival, date }) => {
    return data.filter(item => {
        const matchesDeparture = departure ? item.lieuDepart === departure : true;
        const matchesArrival = arrival ? item.lieuArriver === arrival : true;
        const matchesDate = date ? new Date(item.dateDepart).toDateString() === new Date(date).toDateString() : true;
        return matchesDeparture && matchesArrival && matchesDate;
    });
};

function TransportTabs({ searchParams }) {
    const [activeTab, setActiveTab] = useState('Taxi-brousse');
    const [filteredTaxiBrousseData, setFilteredTaxiBrousseData] = useState([]);
    const [filteredTrainData, setFilteredTrainData] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const result = await axios.get("http://localhost:8080/api/admin/transport");

                // Filtrer les données pour exclure les transports passés
                const today = new Date();
                const filteredData = result.data.filter(item => new Date(item.dateDepart) >= today);

                setData(filteredData);

                // Filtrer les données initialement en fonction des catégories
                const taxiBrousseData = filteredData.filter(item => item.categorie === "TAXI_BROUSSE");
                const trainData = filteredData.filter(item => item.categorie === "TRAIN");

                setFilteredTaxiBrousseData(taxiBrousseData);
                setFilteredTrainData(trainData);
            } catch (error) {
                console.error("Erreur lors du chargement des données", error);
            }
        };

        fetchdata();

        if (searchParams) {
            setFilteredTaxiBrousseData(filterResults(data.filter(item => item.categorie === "TAXI_BROUSSE"), searchParams));
            setFilteredTrainData(filterResults(data.filter(item => item.categorie === "TRAIN"), searchParams));
        }
    }, [searchParams, data]);

    const handleTransportClick = (item) => {
        sessionStorage.setItem('selectedTransport', JSON.stringify(item));
        navigate('/transportreserve', { state: { transportData: item } });
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
