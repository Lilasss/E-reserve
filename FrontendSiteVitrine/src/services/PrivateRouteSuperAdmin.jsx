import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRouteSuperAdmin = ({ children }) => {
    const authData = Cookies.get('authData'); // Check if the token exists

    // If no token, redirect to login
    if (!authData && authData.split("/")[-1] === "SUPERADMIN") {
        return <Navigate to="/login" />;
    }

    // If token exists, allow access to the route
    return children;
};

export default PrivateRouteSuperAdmin;
