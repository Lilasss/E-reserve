import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const adminData = [
  {
    id: 1,
    name: 'Admin 1',
    email: 'admin1@example.com',
    monthlyReservations: [5, 10, 8, 15, 12, 20, 18, 25, 22, 30, 25, 28],
  },
  {
    id: 2,
    name: 'Admin 2',
    email: 'admin2@example.com',
    monthlyReservations: [2, 4, 3, 8, 7, 10, 9, 13, 11, 14, 12, 16],
  },
  {
    id: 3,
    name: 'Admin 3',
    email: 'admin3@example.com',
    monthlyReservations: [1, 3, 4, 7, 6, 9, 8, 11, 10, 15, 14, 18],
  },
];

const totalReservationsData = [150, 180, 200, 220, 250, 270, 300, 320, 340, 360, 380, 400];

const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getDynamicMonths = () => {
  const currentMonthIndex = new Date().getMonth();
  const dynamicMonths = [...allMonths.slice(currentMonthIndex + 1), ...allMonths.slice(0, currentMonthIndex + 1)];
  return dynamicMonths;
};

const Dashboard = () => {
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [superAdminRevenue, setSuperAdminRevenue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRevenue = async () => {
      const revenue = 120000;
      setSuperAdminRevenue(revenue);
    };

    fetchRevenue();
  }, []);

  const selectAdmin = (admin) => {
    setSelectedAdmin(admin);
  };

  const filteredAdminData = adminData.filter((admin) =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chartData = selectedAdmin
    ? {
      labels: getDynamicMonths(),
      datasets: [
        {
          label: `Réservations par mois pour ${selectedAdmin.name}`,
          data: [...selectedAdmin.monthlyReservations.slice(-12), ...selectedAdmin.monthlyReservations.slice(0, -12)],
          fill: false,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    }
    : null;

  const totalReservationsChartData = {
    labels: getDynamicMonths(),
    datasets: [
      {
        label: 'Total des Réservations',
        data: totalReservationsData,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen p-8 -mt-12">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 flex-1">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Total des Réservations</h2>
          <div className="h-72">
            <Bar data={totalReservationsChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 flex-1">
          <h2 className="text-xl text-center font-bold mb-2 text-green-600">Chiffre d'Affaires</h2>
          <p className="text-2xl text-center font-semibold text-gray-700">{superAdminRevenue.toLocaleString()} Ar</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-300 shadow-md rounded-lg overflow-x-auto">
          <div className="p-6">
            <input
              type="text"
              placeholder="Rechercher par nom ou email..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <table className="min-w-full">
            <thead className="bg-gray-200 text-center border-b border-gray-200">
              <tr>
                <th className="py-3 px-6 text-center text-gray-600 font-medium">Nom</th>
                <th className="py-3 px-6 text-center text-gray-600 font-medium">Email</th>
                <th className="py-3 px-6 text-center text-gray-600 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdminData.map((admin) => (
                <tr
                  key={admin.id}
                  className="hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={() => selectAdmin(admin)}
                >
                  <td className="py-3 px-6 border-b">{admin.name}</td>
                  <td className="py-3 px-6 border-b">{admin.email}</td>
                  <td className="py-3 px-6 border-b">
                    <button className="text-[#0A5DA6] hover:text-[] transition-colors font-semibold">
                      Voir détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedAdmin && (
          <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6">
            <p className="mb-6 text-gray-600">Email: {selectedAdmin.email}</p>

            <div className="h-80">
              <Line data={chartData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
