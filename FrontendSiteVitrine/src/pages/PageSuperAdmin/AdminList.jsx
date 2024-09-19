
import React, { useState } from 'react';
import DonutChart from '../PageAdmin/services/Evenement/DonutChart';

const AdminList = ({ admins }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredAdmins = admins.filter((admin) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            admin.name.toLowerCase().includes(searchLower) ||
            admin.email.toLowerCase().includes(searchLower)
        );
    });

    return (
        <div className="w-full bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-300">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-base text-gray-900">Liste des Administrateurs</h2>
                <div className="relative w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Rechercher par nom ou email"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full py-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-3 focus:ring-teal-600 focus:border-transparent"
                    />
                </div>
            </div>

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
                        {filteredAdmins.map((admin) => {
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

