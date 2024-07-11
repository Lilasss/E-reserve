import React from 'react';

const benefits = [
    {
        title: 'Gestion Centralisée',
        description: 'E-reserve offre une plateforme unique qui permet de gérer efficacement et de manière intégrée toutes vos réservations. Simplifiez la gestion de vos services en un seul endroit.'
    },
    {
        title: 'Interface Conviviale',
        description: 'L’interface conviviale et intuitive d’E-reserve rend l’expérience utilisateur fluide et agréable. Facilitez la réservation et la gestion de vos services, même pour les utilisateurs novices.'
    },
    {
        title: 'Réservation Simplifiée',
        description: 'E-reserve propose des processus de réservation rapides et efficaces. Grâce à notre plateforme, vos clients peuvent réserver en quelques clics, sans complications ni tracas.'
    },
    {
        title: 'Sécurité des Données',
        description: 'La protection avancée des données est au cœur d’E-reserve. Nous utilisons des protocoles de sécurité robustes pour assurer la confidentialité et l’intégrité de vos informations sensibles.'
    }
];

const Benefits = () => {
    return (
        <section id="benefits" className="bg-white py-16"> {/* Augmenté py-12 à py-16 pour augmenter la hauteur */}
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Pourquoi Choisir E-reserve ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`p-8 shadow-lg rounded-lg flex items-start transform transition duration-300 hover:scale-105 bg-${index % 4 === 0 ? 'green-400' : index % 4 === 1 ? 'purple-400' : index % 4 === 2 ? 'yellow-400' : 'blue-400'}`}
                        >
                            <div className="text-4xl mr-4">{benefit.icon}</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-blue-600">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefits;
