import React, { useState } from "react";
import { HomeIcon, ChartBarIcon, ChevronDownIcon, Cog6ToothIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import logo from "../assets/1logo.png";
import { Link, useLocation } from "react-router-dom";

function SidebarAdmin() {
    const location = useLocation();
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="flex flex-col h-screen p-5 bg-gray-800 w-64 fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-10">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>

            <nav className="flex flex-col space-y-4">
                <Link
                    to="/admin/admindashboard"
                    className={`flex items-center p-2 text-gray-300 ${location.pathname === "/admin/admindashboard" ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"} rounded-lg transition-colors`}
                >
                    <HomeIcon className="h-6 w-6" />
                    <span className="ml-3 hidden sm:inline">Tableau de Bord</span>
                </Link>

                <div>
                    <button
                        onClick={() => toggleSection('services')}
                        className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors w-full"
                    >
                        <Cog6ToothIcon className="h-6 w-6" />
                        <span className="ml-3 hidden sm:inline">Services</span>
                        <ChevronDownIcon className={`h-6 w-6 ml-auto transition-transform duration-300 ${openSection === 'services' ? "rotate-180" : ""}`} />
                    </button>
                    <div
                        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openSection === 'services' ? "max-h-40" : "max-h-0"}`}
                    >
                        <Link
                            to="/admin/evenement"
                            className={`flex items-center p-2 text-gray-300 ml-5 ${location.pathname.startsWith("/admin/evenement") || location.pathname === "/admin/createevent" ? "text-white" : "hover:text-white"} rounded-lg transition-colors`}
                        >
                            <span className="ml-4 hidden sm:inline my-2">Événements</span>
                        </Link>
                        <Link
                            to="/admin/createtrans"
                            className={`flex items-center p-2 text-gray-300 ml-5 ${location.pathname.startsWith("/pagetrans/createtrans") ? "bg-gray-700 text-white" : "hover:text-white"} rounded-lg transition-colors`}
                        >
                            <span className="ml-4 hidden sm:inline">Transports</span>
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        onClick={() => toggleSection('ventes')}
                        className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors w-full"
                    >
                        <ChartBarIcon className="h-6 w-6" />
                        <span className="ml-3 hidden sm:inline">État des Ventes</span>
                        <ChevronDownIcon className={`h-6 w-6 ml-auto transition-transform duration-300 ${openSection === 'ventes' ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openSection === 'ventes' ? "max-h-40" : "max-h-0"}`}>
                        <Link
                            to="/admin/venteevent"
                            className={`flex items-center p-2 text-gray-300 ml-5 ${location.pathname.startsWith("/admin/venteevent") ? "text-white" : "hover:text-white"} rounded-lg transition-colors`}
                        >
                            <span className="ml-4 hidden sm:inline my-2">Événements</span>
                        </Link>
                        <Link
                            to="/admin/ventetrans"
                            className={`flex items-center p-2 text-gray-300 ml-5 ${location.pathname.startsWith("/admin/ventetrans") ? "text-white" : "hover:text-white"} rounded-lg transition-colors`}
                        >
                            <span className="ml-4 hidden sm:inline">Transports</span>
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        onClick={() => toggleSection('commandes')}
                        className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors w-full"
                    >
                        <ClipboardDocumentListIcon className="h-6 w-6" />
                        <span className="ml-3 hidden sm:inline">Commandes</span>
                        <ChevronDownIcon className={`h-6 w-6 ml-auto transition-transform duration-300 ${openSection === 'commandes' ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openSection === 'commandes' ? "max-h-40" : "max-h-0"}`}>
                        <Link
                            to="/admin/commandeevent"
                            className={`flex items-center p-2 text-gray-300 ml-5 ${location.pathname.startsWith("/admin/commandeevent") ? "text-white" : "hover:text-white"} rounded-lg transition-colors`}
                        >
                            <span className="ml-4 hidden sm:inline my-2">Événements</span>
                        </Link>
                        <Link
                            to="/admin/commandetrans"
                            className={`flex items-center p-2 text-gray-300 ml-5 ${location.pathname.startsWith("/admin/commandetrans") ? "text-white" : "hover:text-white"} rounded-lg transition-colors`}
                        >
                            <span className="ml-4 hidden sm:inline">Transports</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SidebarAdmin;
