import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import emailjs from 'emailjs-com';

const Step2 = ({ handlePrev }) => {
    const navigate = useNavigate();
    const userIdConnected = JSON.parse(sessionStorage.getItem('userData'))?.id || null;
    const [userData, setUserData] = useState({
        id: 0,
        name: '',
        email: '',
        phone: ''
    });
    const [reserve, setReserve] = useState([]);
    const selectedTransport = JSON.parse(sessionStorage.getItem("selectedTransport"));
    const transportId = selectedTransport?.id;
    const trajetTrans = [selectedTransport?.lieuDepart, selectedTransport?.lieuArriver];

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false
    });

    const [reservationDetails, setReservationDetails] = useState({
        trajet: [],
        place: [],
        price: 0
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = JSON.parse(sessionStorage.getItem('userData'));
                if (user && user.fullName && user.email) {
                    setUserData({
                        id: user.id,
                        name: user.fullName,
                        email: user.email,
                        phone: ''
                    });
                } else {
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error retrieving user data:', error);
                navigate('/login');
            }
        };

        const fetchReservationDetails = () => {
            try {
                const reservation = JSON.parse(localStorage.getItem('reservationDetails'));
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
            name: userData.name.trim() === '',
            email: userData.email.trim() === '',
            phone: userData.phone.trim() === ''
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleNextStep = async () => {
        if (validateForm()) {
            try {
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
                        const res = await axios.post(
                            `http://localhost:8080/api/sold-seats/add?userId=${userIdConnected}&transportReservationId=${transportId}`,
                            reservationDetails.place
                        );

                        sessionStorage.setItem('soldSeatsData', JSON.stringify(res.data));
                        setReserve(res.data);

                        sendEmail(userData, reservationDetails); // Send email before redirecting
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

    const sendEmail = (userData, reservationDetails) => {
        const templateParams = {
            id_cli: userData.id,
            from_name: "E-reserve",
            to_name: userData.name,
            departure: trajetTrans[0],
            arrival: trajetTrans[1],
            reply_to: userData.email,
            phone: userData.phone,
            seats: reservationDetails.place,
            total_price: reservationDetails.price * reservationDetails.place.length
        };

        emailjs.send('service_wisl5hl', 'template_32pl2fb', templateParams, 'A2dsNKc1M9am1QxaD')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
            }, (err) => {
                console.error('Failed to send email:', err);
            });
    };

    const totalPlaces = reservationDetails.place.length;
    const totalPrice = reservationDetails.price * totalPlaces;

    const qrData = JSON.stringify({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        seats: reservationDetails.place,
        totalPlaces: totalPlaces,
        totalPrice: `${totalPrice.toLocaleString()} Ar`
    });

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
                    <p>
                        Selected Seats: {reservationDetails.place.length > 0 
                            ? reservationDetails.place.map(seat => `${seat}`).join(', ') 
                            : 'No seats selected'}
                    </p>
                    <p>Total Price: {totalPrice.toLocaleString()} Ar</p>
                    <QRCode value={qrData} />
                </div>
            </div>

            <div className="flex justify-between mt-8">
                <button onClick={handlePrev} className="bg-blue-500 text-white px-4 py-2 rounded">Back</button>
                <button onClick={handleNextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next & Send Email</button>
            </div>
        </div>
    );
};

export default Step2;
