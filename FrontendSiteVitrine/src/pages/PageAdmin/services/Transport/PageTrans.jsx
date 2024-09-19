import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../../PageSuperAdmin/AdminNavbar'
import SidebarTrans from './SidebarTrans'

function PageTrans() {
    return (
        <div className="flex h-screen bg-gray-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <AdminNavbar />
            <div className="flex flex-col w-full ml-64">
                <SidebarTrans />
                <main className="flex-1 p-6 mt-16 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default PageTrans
