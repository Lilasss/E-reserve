import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-white py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Contactez-nous</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nom</label>
                        <input className="w-full px-3 py-2 border rounded" id="name" type="text" placeholder="Votre nom" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className="w-full px-3 py-2 border rounded" id="email" type="email" placeholder="Votre email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                        <textarea className="w-full px-3 py-2 border rounded" id="message" placeholder="Votre message"></textarea>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
