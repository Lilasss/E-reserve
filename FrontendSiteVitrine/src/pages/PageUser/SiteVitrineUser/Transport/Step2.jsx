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
        const fetchUserData = () => {
            try {
                const user = JSON.parse(sessionStorage.getItem('userData'));
                console.log('Fetched user:', user); // Debugging line

                if (user && user.fullName && user.email && user.telephone) {
                    setUserData({
                        name: user.fullName,
                        email: user.email,
                        phone: user.telephone
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

                const customerResponse = await axios.post('http://localhost:8080/api/customers/create', {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                });

                if (customerResponse.data) {
                    const paymentResponse = await axios.post('http://localhost:8080/api/payments/create-checkout-session', {
                        customer: customerResponse.data.id,
                        place: reservationDetails.place,
                        price: reservationDetails.price
                    });

                    if (paymentResponse.data && paymentResponse.data.url) {
                        await axios.post(
                            `http://localhost:8080/api/sold-seats/add?userId=${userIdConnected}&transportReservationId=${transportId}`,
                            reservationDetails.place
                        );

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
        <div className="step2-form">
            <div className="form-group">
                <label htmlFor="name"><FaUser /> Name</label>
                <input
                    type="text"
                    id="name"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    className={errors.name ? 'error' : ''}
                />
                {errors.name && <p className="error-text">Name is required</p>}
            </div>

            <div className="form-group">
                <label htmlFor="email"><FaEnvelope /> Email</label>
                <input
                    type="email"
                    id="email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <p className="error-text">Email is required</p>}
            </div>

            <div className="form-group">
                <label htmlFor="phone"><FaPhone /> Phone</label>
                <input
                    type="text"
                    id="phone"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <p className="error-text">Phone is required</p>}
            </div>

            <div className="buttons">
                <button type="button" onClick={handlePrev}>Back</button>
                <button type="button" onClick={handleNextStep}>Next</button>
            </div>
        </div>
    );
};

export default Step2;
