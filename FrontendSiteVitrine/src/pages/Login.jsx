import React, { useState } from 'react';
import 'animate.css';
import illustration from '../assets/Connecter.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="hidden md:flex justify-center items-center" style={{ width: '500px', height: '500px', marginRight: '100px', marginTop: '90PX' }}>
                <img
                    src={illustration}
                    alt="Illustration"
                    className="object-cover w-full h-full rounded-l-lg"
                />
            </div>
            <div className="flex justify-center items-center w-full md:w-auto bg-white border border-gray-300 rounded-lg shadow-lg p-8 animate__animated animate__fadeIn" style={{ width: '400px', height: '500px' }}>
                <div className="w-full">
                    <div className="text-center mb-6">
                        {/* <img
                            src=""
                            alt="Logo"
                            className="mx-auto h-16 w-16"
                        /> */}
                        <h1>E-reserve</h1>
                        <h2 className="text-3xl font-bold text-gray-900 mt-4">Connectez-Vous</h2>
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
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Se Connecter
                        </button>
                        <p className="mt-4 text-sm text-center text-gray-600">
                            Vous n'avez pas de compte?{' '}
                            <a href="#" className="text-blue-500 hover:underline">
                                Inscrivez-vous ici
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Login;
