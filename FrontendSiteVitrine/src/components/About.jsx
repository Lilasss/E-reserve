import React from 'react';
import aboutImage from '../assets/about-image.jpg'; // Assurez-vous d'avoir cette image ou remplacez-la par une autre

const About = () => {
    return (
        <section id="about" className="bg-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">Qu'est-ce que E-Reserve ?</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        E-Reserve est une plateforme numérique de gestion des réservations pour divers services tels que les chambres d'hôtel, les transports et les billets pour des événements. Conçue pour les entreprises, elle permet de centraliser et de simplifier toutes les opérations de réservation.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        En utilisant E-Reserve, les entreprises peuvent économiser du temps, améliorer leur efficacité et offrir un service client de qualité supérieure.
                    </p>
                    <a href="#contact" className="text-white bg-[#0A5DA6] py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                        Contactez-nous pour un contrat
                    </a>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img src={aboutImage} alt="About E-Reserve" className="rounded shadow-lg" />
                </div>
            </div>
        </section>
    );
}

export default About;
