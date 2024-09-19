
import React, { useState } from 'react';

const initialOrders = [
    { id: 2, client: 'Hantasoa@gmail.com', date: '2024-09-03', montant: 50000, type: 'Taxi', depart: 'Antananarivo', arrivee: 'Toamasina', places: 2 },
    // { id: 3, client: 'Boby@gmail.com', date: '2024-09-03', montant: 50000, type: 'Train', depart: 'Antananarivo', arrivee: 'Toamasina', places: 3 },
    { id: 4, client: 'Marolahy@gmail.com', date: '2024-09-07', montant: 40000, type: 'Train', depart: 'Antananarivo', arrivee: 'Fianarantsoa', places: 1 },
];

const CommandeTrans = () => {
    const [searchType, setSearchType] = useState('');
    const [searchClient, setSearchClient] = useState('');
    const [searchDepart, setSearchDepart] = useState('');
    const [searchArrivee, setSearchArrivee] = useState('');
    const [sortKey, setSortKey] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedOrder, setSelectedOrder] = useState(null);

    const filteredOrders = initialOrders.filter(order =>
        order.type.toLowerCase().includes(searchType.toLowerCase()) &&
        order.client.toLowerCase().includes(searchClient.toLowerCase()) &&
        order.depart.toLowerCase().includes(searchDepart.toLowerCase()) &&
        order.arrivee.toLowerCase().includes(searchArrivee.toLowerCase())
    );

    const sortedOrders = [...filteredOrders].sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const handleSort = (key) => {
        if (sortKey === key) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortDirection('asc');
        }
    };

    const handleRowClick = (order) => {
        setSelectedOrder(order);
    };

    const closeDetails = () => {
        setSelectedOrder(null);
    };

    return (
        <>
            <h1 className="text-xl font-bold mb-6 text-blue-800">Liste des commandes - transports</h1>
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Type de transport"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Client"
                        value={searchClient}
                        onChange={(e) => setSearchClient(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Lieu de départ"
                        value={searchDepart}
                        onChange={(e) => setSearchDepart(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Lieu d'arrivée"
                        value={searchArrivee}
                        onChange={(e) => setSearchArrivee(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            {['id', 'client', 'date', 'montant', 'type', 'depart', 'arrivee'].map(header => (
                                <th
                                    key={header}
                                    className="border-b p-4 text-left text-gray-700 cursor-pointer"
                                    onClick={() => handleSort(header)}
                                >
                                    <div className="flex items-center">
                                        {header.charAt(0).toUpperCase() + header.slice(1)}
                                        {sortKey === header && (
                                            <span className="ml-2 text-sm">
                                                {sortDirection === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedOrders.map(order => (
                            <tr
                                key={order.id}
                                className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                onClick={() => handleRowClick(order)}
                            >
                                <td className="border-b p-4">{order.id}</td>
                                <td className="border-b p-4">{order.client}</td>
                                <td className="border-b p-4">{order.date}</td>
                                <td className="border-b p-4">{order.montant.toLocaleString()} Ar</td>
                                <td className="border-b p-4">
                                    <span className={`px-2 py-1 rounded-full text-sm ${order.type === 'Taxi' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                        {order.type}
                                    </span>
                                </td>
                                <td className="border-b p-4">{order.depart}</td>
                                <td className="border-b p-4">{order.arrivee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedOrder && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        <button onClick={closeDetails} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                            ✖
                        </button>
                        <h2 className="text-lg font-semibold mb-4 text-green-600">Détails de la Commande</h2>
                        <div className="space-y-4">
                            <p><span className='font-semibold text-gray-700'>Client :</span> {selectedOrder.client}</p>
                            <p><span className='font-semibold text-gray-700'>Date :</span> {selectedOrder.date}</p>
                            <p><span className='font-semibold text-gray-700'>Montant :</span> {selectedOrder.montant.toLocaleString()} Ar</p>
                            <p><span className='font-semibold text-gray-700'>Type de Transport :</span> {selectedOrder.type}</p>
                            <p><span className='font-semibold text-gray-700'>Trajet :</span> {selectedOrder.depart} - {selectedOrder.arrivee}</p>
                            <p><span className='font-semibold text-gray-700'>Nombre de Places :</span> {selectedOrder.places}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CommandeTrans;