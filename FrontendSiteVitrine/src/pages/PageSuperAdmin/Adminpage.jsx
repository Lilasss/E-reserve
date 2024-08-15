import React from 'react';
import Sidebar from '../PageAdmin/views/Sidebar';
import AdminNavbar from './AdminNavbar';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <AdminNavbar />
            <div className="flex flex-col w-full ml-64">
            <Sidebar />
                <main className="flex-1 p-6 mt-16 overflow-auto">
                    <Outlet />

                </main>
            </div>
        </div>
    );
};

export default AdminPage;
