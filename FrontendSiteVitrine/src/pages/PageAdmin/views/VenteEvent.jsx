import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, BarElement, DoughnutController, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement } from 'chart.js';

Chart.register(BarElement, DoughnutController, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement);

const mockData = {
  events: [
    {
      name: 'Bodo',
      date: '2024-09-20',
      totalTicketsSold: 150,
      ticketsAvailable: 50,
      ticketTypes: [
        { type: 'VIP', sold: 50, available: 10, price: 20000 },
        { type: 'Standard', sold: 100, available: 40, price: 5000 },
      ],
    },
    {
      name: 'Concert Reko',
      date: '2024-10-10',
      totalTicketsSold: 200,
      ticketsAvailable: 100,
      ticketTypes: [
        { type: 'VIP', sold: 70, available: 30, price: 30000 },
        { type: 'Standard', sold: 130, available: 70, price: 15000 },
      ],
    },
  ],
};

const VenteEvent = () => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [startDate, setStartDate] = useState(null);

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };

  const filteredEvent = mockData.events.find(
    (event) => event.name === selectedEvent && (!startDate || new Date(event.date).toDateString() === startDate.toDateString())
  );

  const salesChartData = filteredEvent
    ? {
      labels: ['Billets vendus', 'Billets disponibles'],
      datasets: [
        {
          label: 'Nombre de billets',
          data: [filteredEvent.totalTicketsSold, filteredEvent.ticketsAvailable],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    }
    : { labels: [], datasets: [] };

  const ticketTypeDoughnutCharts = filteredEvent
    ? filteredEvent.ticketTypes.map((ticketType) => ({
      data: {
        labels: ['Billets vendus', 'Billets disponibles'],
        datasets: [
          {
            label: `${ticketType.type}`,
            data: [ticketType.sold, ticketType.available],
            backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
          },
        ],
      },
    }))
    : [];

  const ticketTypeTotals = filteredEvent
    ? filteredEvent.ticketTypes.map((ticketType) => ({
      type: ticketType.type,
      total: ticketType.sold * ticketType.price,
    }))
    : [];

  const totalSales = ticketTypeTotals.reduce((acc, ticketType) => acc + ticketType.total, 0);

  return (
    <>
      <div className="p-6 shadow-md rounded-lg bg-white">
        <div className="flex space-x-4">
          <div className="relative w-1/2">
            <select
              value={selectedEvent}
              onChange={handleEventChange}
              className="appearance-none w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            >
              <option value="">Sélectionner un évènement</option>
              {mockData.events.map((event, index) => (
                <option key={index} value={event.name}>
                  {event.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/3">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Date de l'évènement"
              dateFormat="dd/MM/yyyy"
              className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>
          <div className="w-1/3">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none">
              Rechercher
            </button>
          </div>
        </div>
      </div>

      {filteredEvent ? (
        <>
          <div className="mt-10 flex space-x-6">
            <div className="w-2/3">
              <Bar data={salesChartData} />
            </div>
            <div className="w-1/3  p-4 ">
              <h3 className="text-lg font-semibold text-center mb-4 mt-4 text-blue-600">Montant total par type de billet</h3>
              <div className="space-y-4">
                {ticketTypeTotals.map((ticketType, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between border border-gray-300">
                    <h4 className="font-semibold text-gray-700">{ticketType.type}</h4>
                    <div className="text-xl font-bold text-gray-900">{`${ticketType.total} Ar`}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-gray-300">
                <h3 className="text-lg font-semibold text-center mb-2 text-blue-600">Montant total des ventes</h3>
                <div className="flex justify-center">
                  <div className="text-2xl font-bold text-gray-900">{`${totalSales} Ar`}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9"></div>
          <div className="grid grid-cols-2 gap-4">
            {filteredEvent.ticketTypes.map((ticketType, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-semibold text-center">{ticketType.type}</h3>
                <div className="flex justify-center">
                  <div className="max-w-xs mx-auto">
                    <Doughnut data={ticketTypeDoughnutCharts[index].data} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="mt-6 text-center text-gray-500">Veuillez sélectionner un événement</p>
      )}
    </>
  );
};

export default VenteEvent;