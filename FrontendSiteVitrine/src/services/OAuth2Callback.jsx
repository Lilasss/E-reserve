import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const OAuth2Callback = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code'); // Récupère le code OAuth2 dans l'URL

        if (code) {
            axios.get(`http://localhost:8080/oauth2/callback?code=${code}`)
                .then(response => {
                    const token = response.data.token;
                    Cookies.set('authToken', token, { expires: 1 }); // Stocke le token dans les cookies
                    window.location.href = '/events'; // Redirige l'utilisateur vers le tableau de bord
                })
                .catch(error => console.error('Erreur lors de la récupération du token', error));
        }
    }, []);

    return <p>Connexion en cours...</p>;
};

export default OAuth2Callback;
