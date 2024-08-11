import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faHandsHelping, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';

const services = [
    { title: 'Gestion de Réservations', description: 'Présentation des disponibilités, sélection des dates et des options de tarification, saisie des informations de contact et de paiement', icon: faClipboardList },
    { title: 'Services Personnalisés', description: 'Profitez de services personnalisés pour répondre à tous vos besoins, qu’ils soient simples ou complexes.', icon: faHandsHelping },
    { title: 'Solutions Globales', description: 'Accédez à une gamme complète de solutions pour divers secteurs et industries.', icon: faGlobe }
];

const Services = () => {
    return (
        <>
            <Carousel />
            <section id="services" className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    {/* <h2 className="text-4xl font-bold mb-10 text-gray-700">Nos Services</h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
                            >
                                <div className="text-4xl mb-4 text-blue-600">
                                    <FontAwesomeIcon icon={service.icon} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}

export default Services;
