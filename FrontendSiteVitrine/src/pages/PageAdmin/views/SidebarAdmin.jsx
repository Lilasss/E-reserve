import React from "react";
import { HomeIcon, CalendarIcon, DocumentChartBarIcon } from "@heroicons/react/24/outline";
import logo from "../assets/1logo.png";
import { Link } from "react-router-dom";

function SidebarAdmin() {
    return (
        <div className="flex flex-col h-screen p-5 bg-gray-800 w-64 fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-10">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>

            <nav className="flex flex-col space-y-4">
                <Link
                    to="/admin/admindashboard"
                    className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                >
                    <HomeIcon className="h-6 w-6" />
                    <span className="ml-3 hidden md:inline">Tableau de bord</span>
                </Link>

                <Link
                    to="/admin/evenement"
                    className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                >
                    <CalendarIcon className="h-6 w-6" />
                    <span className="ml-3 hidden md:inline">Evènements</span>
                </Link>

                <Link
                    to="/admin/etat-vente"
                    className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                >
                    <DocumentChartBarIcon className="h-6 w-6" />
                    <span className="ml-3 hidden md:inline">Etat de vente</span>
                </Link>
            </nav>
        </div>
    );
}

export default SidebarAdmin;
