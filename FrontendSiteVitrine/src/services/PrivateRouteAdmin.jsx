import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouteAdmin = ({ children, user, service }) => {
    const authData = sessionStorage.getItem('authData'); // Get the auth data from sessionStorage

    // Check if authData exists and if the user role is ADMIN
    if (!authData || authData.split('/').pop() !== 'ADMIN') {
        return <Navigate to="/login" />;
    }

    // Pass `user` and `serviceId` only to the React children, not to DOM elements
    return (
        <div>
            {React.Children.map(children, child =>
                React.cloneElement(child, { user, service })
            )}
        </div>
    );
};

export default PrivateRouteAdmin;
