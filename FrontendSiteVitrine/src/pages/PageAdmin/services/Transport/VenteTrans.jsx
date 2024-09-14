import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const mockData = {
  trips: [
    { departure: 'Antananarivo', arrival: 'Toamasina', date: '2024-09-15', transport: 'Train', reservations: 120, seatsAvailable: 30, pricePerReservation: 50 },
    { departure: 'Antananarivo', arrival: 'Fianarantsoa', date: '2024-09-16', transport: 'Taxi Brousse', reservations: 80, seatsAvailable: 20, pricePerReservation: 40 },
    { departure: 'Toamasina', arrival: 'Mahajanga', date: '2024-09-17', transport: 'Train', reservations: 50, seatsAvailable: 100, pricePerReservation: 60 },
    { departure: 'Fianarantsoa', arrival: 'Antananarivo', date: '2024-09-18', transport: 'Taxi Brousse', reservations: 50, seatsAvailable: 50, pricePerReservation: 35 },
  ],
};

const VenteTrans = () => {
  const [selectedTransport, setSelectedTransport] = useState('Tous');
  const [departureFilter, setDepartureFilter] = useState('');
  const [arrivalFilter, setArrivalFilter] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredTrips = mockData.trips
    .filter(trip =>
      (selectedTransport === 'Tous' || trip.transport === selectedTransport) &&
      (!departureFilter || trip.departure.toLowerCase().includes(departureFilter.toLowerCase())) &&
      (!arrivalFilter || trip.arrival.toLowerCase().includes(arrivalFilter.toLowerCase())) &&
      (selectedDate ? new Date(trip.date).toDateString() === new Date(selectedDate).toDateString() : true)
    );

  // Préparer les données pour le chart
  const chartData = {
    labels: filteredTrips.map(trip => `${trip.departure} - ${trip.arrival}`),
    datasets: [
      {
        label: 'Réservations effectuées',
        data: filteredTrips.map(trip => trip.reservations),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Places encore disponibles',
        data: filteredTrips.map(trip => trip.seatsAvailable),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'État des Ventes - Transport',
      },
    },
  };

  // Calculer les revenus générés
  const totalRevenus = filteredTrips.reduce((total, trip) => {
    return total + trip.reservations * trip.pricePerReservation;
  }, 0);

  return (
    <>
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex space-x-4">
          <select
            value={selectedTransport}
            onChange={(e) => setSelectedTransport(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 appearance-none"
          >
            <option value="Tous">Tous</option>
            <option value="Train">Train</option>
            <option value="Taxi Brousse">Taxi Brousse</option>
          </select>
          <input
            type="text"
            placeholder="Départ..."
            value={departureFilter}
            onChange={(e) => setDepartureFilter(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Arrivée..."
            value={arrivalFilter}
            onChange={(e) => setArrivalFilter(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Date"
            dateFormat="dd/MM/yyyy"
            className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6" style={{ height: '400px', width: '100%' }}>
        {filteredTrips.length > 0 ? (
          <Bar data={chartData} options={chartOptions} />
        ) : (
          <p className="mt-6 text-center text-gray-500">Aucun résultat</p>
        )}
      </div>

      <div className="mt-6 bg-gray-100 max-w-96 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-center">
          <span style={{ color: '#57D78E' }}>Revenus générés : </span> {totalRevenus} Ar
        </h3>
      </div>
    </>
  );
};
export default VenteTrans;