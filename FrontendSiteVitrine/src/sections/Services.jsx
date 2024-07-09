import React from 'react';

const services = [
    { title: 'Réservation de Chambre', description: 'Réservez des chambres dans nos hôtels partenaires facilement.' },
    { title: 'Réservation de Transport', description: 'Trouvez et réservez des options de transport adaptées.' },
    { title: 'Réservation de Tickets', description: 'Achetez des billets pour des événements et des attractions.' }
];

const Services = () => {
    return (
        <section id="services" className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Nos Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
