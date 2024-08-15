import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Nombre d'Admins</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Admin Transport</span>
              <span className="text-indigo-600 font-bold text-lg">0</span> 
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Admin Événement</span>
              <span className="text-indigo-600 font-bold text-lg">0</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Nombre de Réservations par Type</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Transport</span>
              <span className="text-indigo-600 font-bold text-lg">0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Événement</span>
              <span className="text-indigo-600 font-bold text-lg">0</span> 
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
