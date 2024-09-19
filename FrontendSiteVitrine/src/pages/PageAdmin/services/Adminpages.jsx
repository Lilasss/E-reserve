import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PrivateRouteAdmin from '../../../services/PrivateRouteAdmin';
import AdminNavbar from '../../PageSuperAdmin/AdminNavbar';
import SidebarAdmin from '../views/SidebarAdmin';

function Adminpages() {
    const [userData, setUserData] = useState(null);
    const [serviceId, setServiceId] = useState(null);

    useEffect(() => {
        const authData = sessionStorage.getItem('authData');
        if (authData) {
            const [id] = authData.split('/');

            const fetchUserData = async () => {
                try {
                    // Fetch user data
                    const userResponse = await axios.get(`http://localhost:8080/api/users/${id}`);
                    setUserData(userResponse.data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };

            fetchUserData();  // Call the async function
        }
    }, []);  // Empty dependency array means this effect runs once on mount

    useEffect(() => {
        if (userData && userData.id) {
            const fetchServiceId = async () => {
                try {
                    // Fetch service ID
                    const serviceResponse = await axios.get(`http://localhost:8080/api/services/user/${userData.id}`);
                    setServiceId(serviceResponse.data);
                } catch (error) {
                    console.error('Error fetching service ID:', error);
                }
            };

            fetchServiceId();
        }
    }, [userData]);  // Dependency array includes `userData`

    // Log statements inside useEffect hooks for debugging
    useEffect(() => {
        if (userData) {
            console.log('User Data:', userData);
        }
    }, [userData]);

    useEffect(() => {
        if (serviceId) {
            console.log('Service ID:', serviceId);
        }
    }, [serviceId]);

    return (
        <PrivateRouteAdmin user={userData} serviceid={serviceId}>
            <div className="flex h-screen bg-gray-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <AdminNavbar />
                <div className="flex flex-col w-full ml-64">
                    <SidebarAdmin />
                    <main className="flex-1 p-6 mt-16 overflow-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
        </PrivateRouteAdmin>
    );
}

export default Adminpages;
