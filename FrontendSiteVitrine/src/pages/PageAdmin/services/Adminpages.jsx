import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PrivateRouteAdmin from '../../../services/PrivateRouteAdmin';
import AdminNavbar from '../../PageSuperAdmin/AdminNavbar';
import SidebarAdmin from '../views/SidebarAdmin';

function Adminpages() {
    const [userData, setUserData] = useState(null);
    const [service, setService] = useState(null);

    // Load user data and service ID from sessionStorage if available
    useEffect(() => {
        const storedUserData = sessionStorage.getItem('userData');
        const storedServiceId = sessionStorage.getItem('service');

        if (storedUserData && storedServiceId) {
            setUserData(JSON.parse(storedUserData));
            setService(JSON.parse(storedServiceId)); // Corrected from setServiceId to setService
        } else {
            const authData = sessionStorage.getItem('authData');
            if (authData) {
                const [id] = authData.split('/');

                const fetchUserData = async () => {
                    try {
                        const userResponse = await axios.get(`http://localhost:8080/api/users/${id}`);
                        setUserData(userResponse.data);
                    } catch (error) {
                        console.error('Error fetching user data:', error);
                    }
                };

                fetchUserData();
            }
        }
    }, []);  // Run this only once when the component mounts

    // Fetch service ID when user data is available
    useEffect(() => {
        if (userData && userData.id) {
            const fetchServiceId = async () => {
                try {
                    const serviceResponse = await axios.get(`http://localhost:8080/api/services/user/${userData.id}`);
                    setService(serviceResponse.data); // Correctly set the service data
                    console.log(serviceResponse.data);
                } catch (error) {
                    console.error('Error fetching service:', error);
                }
            };

            fetchServiceId();
        }
    }, [userData]); // Added userData as a dependency

    // Store userData and serviceId in sessionStorage once they are fetched
    useEffect(() => {
        if (userData) {
            sessionStorage.setItem('userData', JSON.stringify(userData));
        }
        if (service) {
            sessionStorage.setItem('service', JSON.stringify(service));
        }
    }, [userData, service]);  // Run when userData or service changes

    return (
        <PrivateRouteAdmin user={userData} service={service}>
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
