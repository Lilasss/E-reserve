import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import illustration from '../assets/Connecter.png';
import logoImage from '../assets/2logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            if ((email === 'nomena@gmail.com' && password === '2202') || 
                (email === 'razafindramboahantasoa@gmail.com' && password === '2202')) {
                
                if (rememberMe) {
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                }

                if (email === 'nomena@gmail.com') {
                    navigate('/admin/evenement');
                } else if (email === 'razafindramboahantasoa@gmail.com') {
                    navigate('/superadmin/adminmanagement');
                }
            } else {
                alert('Identifiants incorrects');
            }
        } else {
            console.log(`Email: ${email}, Password: ${password}`);
            // Handle registration
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="hidden md:flex justify-center items-center" style={{ width: '500px', height: '500px', marginRight: '100px', marginTop: '90px' }}>
                <img
                    src={illustration}
                    alt="Illustration"
                    className="object-cover w-full h-full rounded-l-lg"
                />
            </div>
            <div className="flex justify-center items-center w-full md:w-auto bg-white border border-gray-300 rounded-lg shadow-lg p-8 animate__animated animate__fadeIn" style={{ width: '400px', height: 'auto' }}>
                <div className="w-full">
                    <div className="text-center mb-6">
                        <img src={logoImage} alt="E-Reserve" className="w-32 h-auto mx-auto" />
                        <h2 className="text-3xl font-bold text-blue-800 mt-4">
                            {isLogin ? 'Connectez-Vous' : 'Inscrivez-Vous'}
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out transform focus:scale-105"
                                placeholder="Votre Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 transition duration-300 ease-in-out transform focus:scale-105"
                                placeholder="Votre Mot de passe"
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
                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                                Se souvenir de moi
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            {isLogin ? 'Se Connecter' : 'S\'inscrire'}
                        </button>
                        <p className="mt-4 text-sm text-center text-gray-600">
                            {isLogin ? (
                                <>Vous n'avez pas de compte?{' '}
                                    <a href="#" className="text-blue-500 hover:underline" onClick={() => setIsLogin(false)}>
                                        Inscrivez-vous ici
                                    </a></>
                            ) : (
                                <>
                                    Vous avez déjà un compte?{' '}
                                    <a href="#" className="text-blue-500 hover:underline" onClick={() => setIsLogin(true)}>
                                        Connectez-vous ici
                                    </a>
                                </>
                            )}
                        </p>
                        {isEmailSent && (
                            <p className="mt-4 text-sm text-center text-gray-600">
                                Un email de vérification a été envoyé. Veuillez vérifier votre boîte de réception.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
