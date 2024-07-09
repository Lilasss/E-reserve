import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactFormPage = () => {
    const [phone, setPhone] = useState('');

    return (
        <section id="contact-form" className="bg-gradient-to-r from-blue-100 to-blue-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center text-blue-800 mb-10">Contactez-nous</h2>
                <div className="max-w-lg mx-auto bg-white p-8 shadow-2xl rounded-xl">
                    <form>
                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="name">Nom</label>
                            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" type="text" id="name" name="name" placeholder="Votre nom" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="phone">Téléphone</label>
                            <PhoneInput
                                country={'mg'}
                                value={phone}
                                onChange={setPhone}
                                inputClass="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                specialLabel=""
                                masks={{ mg: '(...) .. ... ..' }}
                                autoFormat={true}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" type="email" id="email" name="email" placeholder="Votre email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="subject">Sujet</label>
                            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" type="text" id="subject" name="subject" placeholder="Le sujet de votre message" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="message">Message</label>
                            <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" id="message" name="message" rows="5" placeholder="Votre message"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactFormPage;
