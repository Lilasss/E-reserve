import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Ensure that you are using Cookies if needed for auth, but it's not used in this example

const PrivateRouteSuperAdmin = ({ children }) => {
    const authData = sessionStorage.getItem('authData'); // Get the auth data from sessionStorage

    // If no authData or it's not SUPERADMIN, redirect to login
    if (!authData || !authData.includes("SUPERADMIN")) {
        return <Navigate to="/login" />;
    }

    // If authData is valid and user is SUPERADMIN, allow access to the route
    return children;
};

export default PrivateRouteSuperAdmin;
