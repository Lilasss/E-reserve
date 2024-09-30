import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Fonction pour générer les labels des mois jusqu'au mois actuel
  const generateMonthLabels = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth(); // Mois actuel (0 = Jan, 1 = Feb, ..., 11 = Dec)
    return months.slice(0, currentMonth + 1);
  };

  // Fonction pour générer les données des réservations avec des chiffres plus petits
  const generateReservationData = () => {
    const currentMonth = new Date().getMonth();
    const data = [12, 6, 27, 12, 15, 6, 8, 10, 15, 20, 18, 27]; // Données fictives ajustées
    return data.slice(0, currentMonth + 1); // Prendre les données jusqu'au mois actuel
  };

  const reservationData = {
    labels: generateMonthLabels(),
    datasets: [
      {
        label: 'Réservations Mensuelles',
        data: generateReservationData(),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Couleur du bar
        borderColor: '#4bc0c0',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        hoverBorderColor: '#3b9e9e',
      },
    ],
  };

  const revenueData = {
    labels: ['Train', 'Taxi Brousse'],
    datasets: [
      {
        label: 'Répartition des Revenus',
        data: [4000, 2500], // Données fictives ajustées
        backgroundColor: ['#6c757d', '#17a2b8'],
        hoverBackgroundColor: ['#5a6268', '#138496'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  const totalTransportUsers = 8; 
  const totalEventUsers = 5; 

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-500 shadow-lg rounded-xl my-5 p-6 flex items-center">
            <div className="text-center w-full">
              <h2 className="text-xl font-bold mb-4 text-blue-600">Utilisateurs transport</h2>
              <p className="text-2xl font-semibold text-gray-800">{totalTransportUsers}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-600 shadow-lg rounded-xl my-5  p-6 flex items-center">
            <div className="text-center w-full">
              <h2 className="text-xl font-bold mb-4 text-purple-600">Utilisateurs événement</h2>
              <p className="text-2xl font-semibold text-gray-800">{totalEventUsers}</p>
            </div>
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Bar
            data={reservationData}
            options={{
              responsive: true,
              plugins: {
                title: { display: true, text: 'Réservations Mensuelles', font: { size: 18, weight: 'bold' } },
              },
              animation: { duration: 1500 },
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
                animation: { animateScale: true, duration: 2000 },
              }}
              height={400}
              width={400}
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
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border-b p-2">20</td>
              <td className="border-b p-2">razafindramboahantasoa@gmail.com</td>
              <td className="border-b p-2">Antananarivo</td>
              <td className="border-b p-2">Toamasina</td>
              <td className="border-b p-2">2024-09-23</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
