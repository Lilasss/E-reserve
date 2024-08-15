import React, { useState } from 'react';
import Select from 'react-select';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/Super.css';
import AdminList from '../PageAdmin/services/AdminList';

function AdminManagement() {
    const [activeTab, setActiveTab] = useState('admin');
    const [adminData, setAdminData] = useState({
        companyName: '',
        email: '',
        role: '',
    });
    const [contractDeadline, setContractDeadline] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const roleOptions = [
        { value: 'evenement', label: 'Événement' },
        { value: 'transport', label: 'Transport' },
    ];

    const isAdminFormComplete = () =>
        adminData.companyName && adminData.email && adminData.role;

    const handleAdminChange = (e) => {
        setAdminData({
            ...adminData,
            [e.target.id]: e.target.value,
        });
    };

    const handleContractChange = (e) => {
        setContractDeadline(e.target.value);
    };

    const handleSubmitAdmin = (e) => {
        e.preventDefault();
        if (isAdminFormComplete()) {
            setActiveTab('contractDeadline');
        } else {
            toast.error('Veuillez compléter tous les champs du formulaire Admin.');
        }
    };

    const handleSubmitContract = (e) => {
        e.preventDefault();
        if (!contractDeadline) {
            toast.error('Veuillez sélectionner une date de fin de contrat.');
            return;
        }
        setShowSuccessModal(true);
    };

    const closeModal = () => {
        setShowSuccessModal(false);
        window.location.reload();
    };

    const admins = [
        {
            id: 1,
            name: 'Arat',
            email: 'arat2@gmail.com',
            contractEndDate: '2024-09-30',
        },
        {
            id: 2,
            name: 'SOPA kal',
            email: 'sopakal.@gmail.com',
            contractEndDate: '2024-08-20',
        },
    ];

    return (
        <div className="flex p-8 min-h-screen relative bg-gray-100">
            <div className="w-3/4 pr-8">
                <div className="flex border-b border-gray-300 mb-10">
                    <button
                        className={`px-6 py-3 text-lg transition-colors duration-200 rounded-t-lg 
                        ${activeTab === 'admin' ? 'border-b-4 border-teal-600 text-gray-800 bg-white shadow-md' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('admin')}
                    >
                        Registre Admin
                    </button>

                    <button
                        className={`ml-6 px-6 py-3 text-lg transition-colors duration-200 rounded-t-lg 
    ${activeTab === 'contractDeadline' ? 'border-b-4 border-teal-600 text-gray-800 bg-white shadow-md' : 'text-gray-600'}
    ${!isAdminFormComplete() ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={() => isAdminFormComplete() && setActiveTab('contractDeadline')}
                        disabled={!isAdminFormComplete()}
                        style={{ borderBottomWidth: activeTab === 'contractDeadline' ? '4px' : '0' }}
                    >
                        Délai de Contrat
                    </button>

                </div>

                <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
                    {activeTab === 'admin' && (
                        <form onSubmit={handleSubmitAdmin}>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="companyName">
                                    Nom de l'entreprise
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                    focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                                    placeholder="Nom de l'entreprise"
                                    value={adminData.companyName}
                                    onChange={handleAdminChange}
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                    focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                                    placeholder="Adresse email"
                                    value={adminData.email}
                                    onChange={handleAdminChange}
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="role">
                                    Rôle
                                </label>
                                <Select
                                    id="role"
                                    options={roleOptions}
                                    value={roleOptions.find(option => option.value === adminData.role)}
                                    onChange={(selectedOption) =>
                                        setAdminData({ ...adminData, role: selectedOption.value })
                                    }
                                    placeholder="Sélectionner un rôle"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    required
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-teal-600 text-white px-6 py-3 rounded-lg 
                                    hover:bg-teal-500 transition-colors duration-200"
                                >
                                    Suivant
                                </button>
                            </div>
                        </form>
                    )}

                    {activeTab === 'contractDeadline' && (
                        <form onSubmit={handleSubmitContract}>
                            <h2 className="text-2xl mb-6 text-center text-gray-800">Délai de Contrat</h2>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="clientName">
                                    Nom de l'entreprise
                                </label>
                                <input
                                    type="text"
                                    id="clientName"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed 
                                    focus:outline-none"
                                    placeholder="Nom de l'entreprise"
                                    value={adminData.companyName}
                                    disabled
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="contractDeadline">
                                    Date de fin de contrat
                                </label>
                                <input
                                    type="date"
                                    id="contractDeadline"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                                    focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                                    value={contractDeadline}
                                    onChange={handleContractChange}
                                    required
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-teal-600 text-white px-6 py-3 rounded-lg 
                                    hover:bg-teal-500 transition-colors duration-200"
                                >
                                    Soumettre
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            <AdminList admins={admins} />

            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8  shadow-lg max-w-sm w-full text-center">
                        <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-4">Admin ajouté avec succès</h3>
                        <button
                            onClick={closeModal}
                            className="bg-red-800 text-white px-6 py-3
                            hover:bg-red-900 transition-colors duration-200"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
}

export default AdminManagement;
