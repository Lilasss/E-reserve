import 'animate.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/2logo.png';
import illustration from '../assets/Connecter.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const authData = sessionStorage.getItem('authData') || localStorage.getItem('authData');
        if (authData) {
            const roleUser = authData.split('/')[2];
            redirectToDashboard(roleUser);
        }
    }, [navigate]);

    const redirectToDashboard = (roleUser, redirectUrl) => {
        if (redirectUrl) {
            navigate(redirectUrl);
        } else if (roleUser === 'SUPERADMIN') {
            navigate('/superadmin/dashboard');
        } else if (roleUser === 'ADMIN') {
            navigate('/admin/admindashboard');
        } else {
            navigate('/transports');  // Redirection vers la page Transports
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const data = { email, password };
            const response = await axios.post('http://localhost:8080/auth/login', data);

            const token = response.data.token;
            const userRole = response.data.roleUser;
            const userId = response.data.userId;
            const redirectUrl = response.data.redirectUrl;

            const concatenatedValue = `${userId}/${token}/${userRole}`;

            sessionStorage.setItem('authData', concatenatedValue);
            redirectToDashboard(userRole, redirectUrl);
        } catch (error) {
            console.error('Échec de la connexion :', error);
            setError('Email ou mot de passe invalide. Veuillez réessayer.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="hidden md:flex justify-center items-center" style={{ width: '500px', height: '500px', marginRight: '100px', marginTop: '90px' }}>
                <img src={illustration} alt="Illustration" className="object-cover w-full h-full rounded-l-lg" />
            </div>
            <div className="flex justify-center items-center w-full md:w-auto bg-white border border-gray-300 rounded-lg shadow-lg p-8 animate__animated animate__fadeIn" style={{ width: '400px', height: 'auto' }}>
                <div className="w-full">
                    <div className="text-center mb-6">
                        <img src={logoImage} alt="E-Reserve" className="w-32 h-auto mx-auto" />
                        <h2 className="text-3xl font-bold text-blue-800 mt-4">Connectez-Vous</h2>
                    </div>
                    {error && <p className="text-red-600 text-center mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out transform focus:scale-105"
                                placeholder="Votre email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out transform focus:scale-105"
                                placeholder="Votre mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">Se souvenir de moi</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Se Connecter
                        </button>
                    </form>
                    <div className="mt-6 flex justify-center">
                        <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-md py-2 text-gray-700 shadow-sm hover:bg-gray-100 transition duration-300 ease-in-out">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                            Se connecter avec Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
