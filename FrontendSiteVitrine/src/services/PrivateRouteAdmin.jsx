import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Ensure you are using Cookies if needed, but not used in this example

const PrivateRouteAdmin = ({ children, user, serviceId }) => {
    const authData = sessionStorage.getItem('authData'); // Get the auth data from sessionStorage

    // Check if authData exists and if the user role is ADMIN
    if (!authData || authData.split('/').pop() !== 'ADMIN') {
        return <Navigate to="/login" />;
    }

    // Pass user and serviceId as props to children components
    return React.cloneElement(children, { user, serviceId });
};

export default PrivateRouteAdmin;
