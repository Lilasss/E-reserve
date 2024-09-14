import React, { useState } from 'react';

const initialEvents = [
  { id: 1, client: 'Rasoa@gmail.com', date: '2024-09-10', montant: 150000, nom: 'Jazz', lieu: 'Antananarivo', places: 4 },
  { id: 2, client: 'Mirindra@gmail.com', date: '2024-09-15', montant: 200000, nom: 'Bodo', lieu: 'Toamasina', places: 2 },
  { id: 3, client: 'Gabe@gmail.com', date: '2024-09-20', montant: 180000, nom: 'Reko', lieu: 'Antananarivo', places: 6 },
];

const CommandeEvent = () => {
  const [searchNom, setSearchNom] = useState('');
  const [searchClient, setSearchClient] = useState('');
  const [searchLieu, setSearchLieu] = useState('');
  const [sortKey, setSortKey] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = initialEvents.filter(event =>
    event.nom.toLowerCase().includes(searchNom.toLowerCase()) &&
    event.client.toLowerCase().includes(searchClient.toLowerCase()) &&
    event.lieu.toLowerCase().includes(searchLieu.toLowerCase())
  );

  const sortedEvents = [...filteredEvents].sort((a, b) => {
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

  const handleRowClick = (event) => {
    setSelectedEvent(event);
  };

  const closeDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-6 text-blue-800">Liste des commandes - Événements</h1>
      <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nom de l'événement"
            value={searchNom}
            onChange={(e) => setSearchNom(e.target.value)}
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
            placeholder="Lieu"
            value={searchLieu}
            onChange={(e) => setSearchLieu(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              {['id', 'client', 'date', 'montant', 'nom', 'lieu'].map(header => (
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
            {sortedEvents.map(event => (
              <tr
                key={event.id}
                className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                onClick={() => handleRowClick(event)}
              >
                <td className="border-b p-4">{event.id}</td>
                <td className="border-b p-4">{event.client}</td>
                <td className="border-b p-4">{event.date}</td>
                <td className="border-b p-4">{event.montant.toLocaleString()} Ar</td>
                <td className="border-b p-4">{event.nom}</td>
                <td className="border-b p-4">{event.lieu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button onClick={closeDetails} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
              ✖
            </button>
            <h2 className="text-lg font-semibold mb-4 text-green-600">Détails de l'Événement</h2>
            <div className="space-y-4">
              <p><span className='font-semibold text-gray-700'>Client :</span> {selectedEvent.client}</p>
              <p><span className='font-semibold text-gray-700'>Date de l'événement :</span> {selectedEvent.date}</p>
              <p><span className='font-semibold text-gray-700'>Montant :</span> {selectedEvent.montant.toLocaleString()} Ar</p>
              <p><span className='font-semibold text-gray-700'>Nom de l'événement :</span> {selectedEvent.nom}</p>
              <p><span className='font-semibold text-gray-700'>Lieu :</span> {selectedEvent.lieu}</p>
              <p><span className='font-semibold text-gray-700'>Nombre de Places :</span> {selectedEvent.places}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandeEvent;
