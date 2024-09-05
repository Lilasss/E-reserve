import React, { useState, useRef, useEffect } from 'react';
import { FaTrain, FaBus, FaSort } from 'react-icons/fa';
import TransportDetails from './TransportDetails';

// Données d'exemple pour Taxi-brousse
const taxiBrousseData = [
    {
        name: 'Cotisse',
        date_depart: '2024-09-28',
        heure_depart: '08:00',
        lieu_depart: { code: 'T001', nom: 'Antananarivo' },
        lieu_arriver: { code: 'T002', nom: 'Fianarantsoa' },
        nombre_place: 15,
        prix: 50000,
    },
    {
        name: 'Soatrans',
        date_depart: '2024-09-30',
        heure_depart: '08:00',
        lieu_depart: { code: 'T001', nom: 'Antsirabe' },
        lieu_arriver: { code: 'T002', nom: 'Antananarivo' },
        nombre_place: 15,
        prix: 20000,
    },
];

const trainData = [
    {
        name: 'Garabe',
        date_depart: '2024-09-20',
        heure_depart: '14:00',
        lieu_depart: { code: 'R001', nom: 'Antananarivo' },
        lieu_arriver: { code: 'R002', nom: 'Toamasina' },
        nombre_place: 56,
        prix: 12000,
    },
    {
        name: 'Gare',
        date_depart: '2024-09-24',
        heure_depart: '14:00',
        lieu_depart: { code: 'R001', nom: 'Fianarantsoa' },
        lieu_arriver: { code: 'R002', nom: 'Manakara' },
        nombre_place: 56,
        prix: 12000,
    },
];

function TransportTabs() {
    const [activeTab, setActiveTab] = useState('Taxi-brousse');
    const [priceSortOpen, setPriceSortOpen] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [sortedTaxiBrousseData, setSortedTaxiBrousseData] = useState(taxiBrousseData);
    const [sortedTrainData, setSortedTrainData] = useState(trainData);
    const priceSortRef = useRef(null);

    const togglePriceSort = () => {
        setPriceSortOpen(!priceSortOpen);
    };

    const selectSortOption = (option) => {
        setSortOption(option);
        setPriceSortOpen(false);
        sortData(option);
    };

    const sortData = (option) => {
        const sortedTaxiBrousse = [...taxiBrousseData].sort((a, b) => option === 'Moins cher' ? a.prix - b.prix : b.prix - a.prix);
        const sortedTrains = [...trainData].sort((a, b) => option === 'Moins cher' ? a.prix - b.prix : b.prix - a.prix);

        if (activeTab === 'Taxi-brousse') {
            setSortedTaxiBrousseData(sortedTaxiBrousse);
        } else {
            setSortedTrainData(sortedTrains);
        }
    };

    const handleClickOutside = (event) => {
        if (priceSortRef.current && !priceSortRef.current.contains(event.target)) {
            setPriceSortOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

            <div className="flex mt-6 space-x-4 relative">
                <button className="flex items-center py-2 px-4 bg-white text-[#425486] rounded-full shadow-sm border border-gray-200 hover:border-[#425486] transition-all duration-300">
                    Horaire
                    <FaSort className="ml-2" size={16} />
                </button>
                <div className="relative" ref={priceSortRef}>
                    <button
                        onClick={togglePriceSort}
                        className="flex items-center py-2 px-4 bg-white text-[#425486] rounded-full shadow-sm border border-gray-200 hover:border-[#425486] transition-all duration-300"
                    >
                        Prix
                        <FaSort className="ml-2" size={16} />
                    </button>
                    {priceSortOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                            <button
                                onClick={() => selectSortOption('Moins cher')}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                Moins cher
                            </button>
                            <button
                                onClick={() => selectSortOption('Plus cher')}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                Plus cher
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="mt-4">
                {activeTab === 'Taxi-brousse' && (
                    <div>
                        {sortedTaxiBrousseData.map((item, index) => (
                            <TransportDetails key={index} {...item} />
                        ))}
                    </div>
                )}
                {activeTab === 'Trains' && (
                    <div>
                        {sortedTrainData.map((item, index) => (
                            <TransportDetails key={index} {...item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TransportTabs;
