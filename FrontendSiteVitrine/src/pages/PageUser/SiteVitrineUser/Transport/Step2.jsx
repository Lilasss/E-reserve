import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Step2 = ({ handlePrev }) => {
    const navigate = useNavigate();
    const userIdConnected = JSON.parse(sessionStorage.getItem('userData'))?.id || null;
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const selectedTransport = JSON.parse(sessionStorage.getItem("selectedTransport"));
    const transportId = selectedTransport?.id;
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false
    });

    const [reservationDetails, setReservationDetails] = useState({
        place: [],
        price: 0
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = JSON.parse(sessionStorage.getItem('userData'));
                console.log('Fetched user:', user); // Debugging line

                if (user && user.fullName && user.email ) {
                    setUserData({
                        name: user.fullName,
                        email: user.email,
             
                    });
                } else {
                    console.warn('User data is incomplete, redirecting to login...');
                    navigate('/login'); // Ensure this path matches your route
                }
            } catch (error) {
                console.error('Error retrieving user data:', error);
                navigate('/login');
            }
        };

        const fetchReservationDetails = () => {
            try {
                const reservation = JSON.parse(localStorage.getItem('reservationDetails'));
                console.log('Fetched reservation details:', reservation); // Debugging line

                if (reservation) {
                    setReservationDetails({
                        place: reservation.place || [],
                        price: reservation.price || 0
                    });
                }
            } catch (error) {
                console.error('Error retrieving reservation details:', error);
            }
        };

        fetchUserData();
        fetchReservationDetails();
    }, [navigate]);

    const validateForm = () => {
        const newErrors = {
            name: userData.name === '',
            email: userData.email === '',
            phone: userData.phone === ''
        };
        setErrors(newErrors);

        return !Object.values(newErrors).some(error => error);
    };

    const handleNextStep = async () => {
        if (validateForm()) {
            try {
                console.log("User data:", userData);
                console.log("Reservation details:", reservationDetails);
                console.log("userIdConnected:", userIdConnected);

                if (!userIdConnected) {
                    console.error("Error: userIdConnected is undefined.");
                    return;
                }
                if (!reservationDetails.place || reservationDetails.place.length === 0) {
                    console.error("Error: reservationDetails.place is undefined or empty.");
                    return;
                }

                // Step 1: Create the customer
                const customerResponse = await axios.post('http://localhost:8080/api/customers/create', {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                });

                if (customerResponse.data) {
                    // Step 2: Create a payment session
                    const paymentResponse = await axios.post('http://localhost:8080/api/payments/create-checkout-session', {
                        customer: customerResponse.data.id,
                        place: reservationDetails.place,
                        price: reservationDetails.price
                    });

                    if (paymentResponse.data && paymentResponse.data.url) {
                        // Step 3: Add sold seats to the reservation
                        await axios.post(
                            `http://localhost:8080/api/sold-seats/add?userId=${userIdConnected}&transportReservationId=${transportId}`,
                            reservationDetails.place
                        );

                        // Step 4: Redirect to the payment session URL
                        window.location.href = paymentResponse.data.url;
                    } else {
                        console.error('Error creating payment session');
                    }
                } else {
                    console.error('Error creating customer');
                }
            } catch (error) {
                console.error('API request error:', error.response ? error.response.data : error.message);
            }
        }
    };

    return (
        <div>
            <div className="flex justify-center space-x-2 mt-8">
                <div className="flex-1 max-w-md shadow-md p-6">
                    <h3 className="text-xl font-semibold text-center text-[#5F91CC] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Personal Information
                    </h3>
                    <div className="space-y-6">
                        <div className="relative flex items-center">
                            <FaUser className="text-blue-500 absolute left-3" />
                            <input
                                type="text"
                                placeholder="Name"
                                value={userData.name}
                                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                className={`w-full pl-10 pr-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-gray-500`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                        </div>
                        <div className="relative flex items-center">
                            <FaEnvelope className="text-blue-500 absolute left-3" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-gray-500`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                        </div>
                        <div className="relative flex items-center">
                            <FaPhone className="text-blue-500 absolute left-3" />
                            <input
                                type="tel"
                                placeholder="Phone"
                                value={userData.phone}
                                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                                className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-gray-500`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">Phone is required</p>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
                <div className="flex-1 max-w-md shadow-md p-6">
                    <h3 className="text-xl font-semibold text-center text-[#5F91CC] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Reservation Details
                    </h3>
                    <p>Selected Seats: {reservationDetails.place.join(', ')}</p>
                    <p>Total Price: {reservationDetails.price.toLocaleString()} Ar</p>
                </div>
            </div>

            <div className="flex justify-between mt-20">
                <button
                    onClick={handlePrev}
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextStep}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step2;
