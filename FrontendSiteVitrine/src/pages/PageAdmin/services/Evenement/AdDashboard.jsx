import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Fonction pour générer les labels des mois jusqu'au mois actuel
  const generateMonthLabels = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth(); // Mois actuel (0 = Jan, 1 = Feb, ..., 11 = Dec)
    return months.slice(0, currentMonth + 1);
  };

  // Fonction pour générer les données des réservations
  const generateReservationData = () => {
    const currentMonth = new Date().getMonth();
    const data = [50, 70, 90, 60, 80, 100, 120, 110, 95, 85, 130, 140]; // Données fictives
    return data.slice(0, currentMonth + 1); // Prendre les données jusqu'au mois actuel
  };

  const reservationData = {
    labels: generateMonthLabels(),
    datasets: [
      {
        label: 'Réservations Mensuelles',
        data: generateReservationData(),
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        hoverBorderColor: '#0056b3',
        hoverBorderWidth: 2,
      },
    ],
  };

  const revenueData = {
    labels: ['Train', 'Taxi Brousse'],
    datasets: [
      {
        label: 'Répartition des Revenus',
        data: [5000, 3000],
        backgroundColor: [
          '#6c757d',
          '#17a2b8', 
        ],
        hoverBackgroundColor: ['#5a6268', '#138496'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Line
            data={reservationData}
            options={{
              responsive: true,
              plugins: {
                title: { display: true, text: 'Réservations Mensuelles', font: { size: 18, weight: 'bold' } },
              },
              animation: {
                duration: 1500,
              },
            }}
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Pie
              data={revenueData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: { display: true, text: 'Répartition des Revenus', font: { size: 18, weight: 'bold' } },
                },
                animation: {
                  animateScale: true,
                  duration: 2000,
                },
              }}
              height={400} width={400}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Liste des Réservations Récentes</h3>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border-b p-2 text-left text-gray-600">ID</th>
              <th className="border-b p-2 text-left text-gray-600">Client</th>
              <th className="border-b p-2 text-left text-gray-600">Départ</th>
              <th className="border-b p-2 text-left text-gray-600">Arrivée</th>
              <th className="border-b p-2 text-left text-gray-600">Date</th>
              <th className="border-b p-2 text-left text-gray-600">Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border-b p-2">1</td>
              <td className="border-b p-2">Maria@gmail.com</td>
              <td className="border-b p-2">Antananarivo</td>
              <td className="border-b p-2">Toamasina</td>
              <td className="border-b p-2">2024-09-15</td>
              <td className="border-b p-2">Confirmée</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
