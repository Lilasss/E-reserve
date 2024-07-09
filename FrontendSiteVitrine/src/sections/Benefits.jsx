import React from 'react';

const benefits = [
    { title: 'Gestion Centralisée', description: 'Une plateforme unique pour gérer toutes vos réservations.', icon: '🛠️' },
    { title: 'Interface Conviviale', description: 'Une interface simple et intuitive pour tous les utilisateurs.', icon: '👨‍💻' },
    { title: 'Réservation Simplifiée', description: 'Des processus de réservation rapides et efficaces.', icon: '⚡' },
    { title: 'Sécurité des Données', description: 'Protection de vos données avec des protocoles de sécurité avancés.', icon: '🔒' }
];

const Benefits = () => {
    return (
        <section id="benefits" className="bg-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Pourquoi Choisir E-reserve ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 p-8 shadow-lg rounded-lg flex items-start transform transition duration-300 hover:scale-105"
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
