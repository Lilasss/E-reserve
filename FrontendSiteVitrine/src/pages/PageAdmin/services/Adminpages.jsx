import React from 'react'
import SidebarAdmin from '../views/SidebarAdmin'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../PageSuperAdmin/AdminNavbar'

function Adminpages() {
    return (
        <div className="flex h-screen bg-gray-100" style={{ fontFamily: 'Poppins, sans-serif'}}>
            <AdminNavbar />
            <div className="flex flex-col w-full ml-64">
                <SidebarAdmin />
                <main className="flex-1 p-6 mt-16 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Adminpages