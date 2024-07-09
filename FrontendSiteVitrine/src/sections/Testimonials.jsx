import React from 'react';

const testimonials = [
    { name: 'Alice', feedback: 'E-reserve a simplifié la gestion de nos réservations de manière incroyable.', role: 'CEO, ABC Corp' },
    { name: 'Bob', feedback: 'Une interface intuitive et des fonctionnalités puissantes.', role: 'Manager, XYZ Ltd' },
    { name: 'Charlie', feedback: 'La sécurité des données est exceptionnelle et rassurante.', role: 'IT Head, QRS Inc' }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Témoignages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
                        >
                            <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
                            <h3 className="text-xl font-bold text-blue-600">{testimonial.name}</h3>
                            <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
