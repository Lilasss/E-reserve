import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faLaptopCode, faBolt, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Assurez-vous que react-router-dom est installé et configuré

const benefits = [
    {
        title: 'Gestion Centralisée',
        description: 'E-reserve offre une plateforme unique qui permet de gérer efficacement et de manière intégrée toutes vos réservations. Simplifiez la gestion de vos services en un seul endroit.',
        icon: faTools,
        bgColor: '#00AA90'
    },
    {
        title: 'Interface Conviviale',
        description: 'L’interface conviviale et intuitive d’E-reserve rend l’expérience utilisateur fluide et agréable. Facilitez la réservation et la gestion de vos services, même pour les utilisateurs novices.',
        icon: faLaptopCode,
        bgColor: '#9E3487'
    },
    {
        title: 'Réservation Simplifiée',
        description: 'E-reserve propose des processus de réservation rapides et efficaces. Grâce à notre plateforme, vos clients peuvent réserver en quelques clics, sans complications ni tracas.',
        icon: faBolt,
        bgColor: '#EFBA23'
    },
    {
        title: 'Sécurité des Données',
        description: 'La protection avancée des données est au cœur d’E-reserve. Nous utilisons des protocoles de sécurité robustes pour assurer la confidentialité et l’intégrité de vos informations sensibles.',
        icon: faLock,
        bgColor: '#095191'
    }
];

const Benefits = () => {
    return (
        <>
            <section id="benefits" className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10 text-gray-800">Pourquoi Choisir E-reserve ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="p-8 shadow-lg rounded-lg flex items-start transform transition duration-300 hover:scale-105"
                                style={{ backgroundColor: benefit.bgColor }}
                            >
                                <div className="text-4xl mr-4 text-white">
                                    <FontAwesomeIcon icon={benefit.icon} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                                    <p className="text-white">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br /><br />
                    <div className="mt-10 text-gray-800">
                        <p className="text-2xl font-bold mb-4">Des solutions modernes et efficaces qui répondent à vos attentes</p>
                        <Link to="/contact-Form" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                            Introduire une demande
                        </Link>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Benefits;
