import React from 'react';
import DonutChart from './DonutChart';

const AdminList = ({ admins }) => {
    return (
        <div className="w-full bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-300">
            <h2 className="text-xl text-center text-gray-900 mb-6">Liste des Administrateurs</h2>

            <div className="overflow-x-auto">
                <table className="w-full bg-white border-collapse rounded-lg overflow-hidden shadow-md">
                    <thead>
                        <tr className="bg-teal-600 text-white">
                            <th className="py-3 px-6 text-left">Nom</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-left">Délai Restant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin) => {
                            const today = new Date();
                            const endDate = new Date(admin.contractEndDate);
                            const diffTime = endDate - today;
                            const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                            return (
                                <tr key={admin.id} className="hover:bg-gray-200 transition-colors duration-300">
                                    <td className="py-4 px-6 border-b border-gray-300">{admin.name}</td>
                                    <td className="py-4 px-6 border-b border-gray-300">{admin.email}</td>
                                    <td className="py-4 px-6 border-b border-gray-300">
                                        <DonutChart remainingDays={remainingDays} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminList;
