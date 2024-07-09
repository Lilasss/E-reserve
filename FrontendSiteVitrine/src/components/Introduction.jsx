import React from 'react';

const Introduction = () => {
    return (
        <section id="introduction" className="bg-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">À propos de E-Reserve</h2>
                <p className="text-gray-700 mb-4">
                    E-Reserve est une plateforme innovante conçue pour simplifier la gestion des réservations pour une variété de services. Que vous ayez besoin de réserver des chambres, des transports ou des billets pour des événements, E-Reserve centralise et optimise le processus pour vous.
                </p>
                <p className="text-gray-700 mb-4">
                    Notre mission est de fournir une solution de gestion de réservations tout-en-un, qui est non seulement facile à utiliser mais aussi extrêmement efficace pour les entreprises de toutes tailles. En intégrant E-Reserve, vous pouvez améliorer la satisfaction de vos clients tout en rationalisant vos opérations internes.
                </p>
                <p className="text-gray-700 mb-4">
                    Découvrez comment E-Reserve peut transformer la façon dont vous gérez les réservations et maximiser votre productivité. Cliquez sur les sections ci-dessous pour en savoir plus sur nos services, avantages et fonctionnalités.
                </p>
                <a href="#services" className="mt-6 text-white bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-600 transition">
                    Explorer les Services
                </a>
            </div>
        </section>
    );
}

export default Introduction;
