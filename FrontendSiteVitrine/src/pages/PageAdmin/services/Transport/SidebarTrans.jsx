import React from "react";
import { HomeIcon, CalendarIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/1logo.png";
import { Link, useLocation } from "react-router-dom";

function SidebarTrans() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen p-5 bg-gray-800 w-64 fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out">
      <div className="flex items-center justify-center mb-10">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      <nav className="flex flex-col space-y-4">
        <Link
          to="/pagetrans/dashboardtrans"
          className={`flex items-center p-2 text-gray-300 ${location.pathname === "/pagetrans/dashboardtrans" ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"} rounded-lg transition-colors`}
        >
          <HomeIcon className="h-6 w-6" />
          <span className="ml-3 hidden md:inline">Tableau de Bord</span>
        </Link>

        <Link
          to="/pagetrans/createtrans"
          className={`flex items-center p-2 text-gray-300 ${location.pathname.startsWith("/pagetrans/createtrans")
            ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"} rounded-lg transition-colors`}
        >
          <CalendarIcon className="h-6 w-6" />
          <span className="ml-3 hidden md:inline">Transports</span>
        </Link>

        <Link
          to="/pagetrans/ventetrans"
          className={`flex items-center p-2 text-gray-300 ${location.pathname.startsWith("/pagetrans/ventetrans") ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"} rounded-lg transition-colors`}
        >
          <ChartBarIcon className="h-6 w-6" />
          <span className="ml-3 hidden md:inline">État des Ventes</span>
        </Link>
      </nav>
    </div>
  );
}

export default SidebarTrans;
