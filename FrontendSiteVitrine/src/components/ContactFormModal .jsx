import React, { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/ContactFormModal.css';

const ContactFormModal = ({ onClose }) => {
    const [phone, setPhone] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const modalRef = useRef(null);

    useEffect(() => {
        document.body.classList.add('modal-open');
        modalRef.current.style.opacity = 0;
        setTimeout(() => {
            modalRef.current.style.opacity = 1;
        }, 0);

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        setPhone(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim() || !phone.trim()) {
            toast.error('Veuillez remplir tous les champs du formulaire.');
            return;
        }
        const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formattedPhone,
            subject: formData.subject,
            message: formData.message
        };

        emailjs.send('service_wisl5hl', 'template_pa46nin', templateParams, 'A2dsNKc1M9am1QxaD')
            .then((response) => {
                console.log('Email envoyé !', response.status, response.text);
                toast.success('Email envoyé !');
                onClose();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                toast.error('Erreur lors de l\'envoi de l\'email.');
            });
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300" ref={modalRef}>
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-md">
                    <div className="flex justify-end p-2">
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition">
                            X
                        </button>
                    </div>
                    <section id="contact-form" className="px-6 py-5">
                        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">S'introduire</h2>
                        <div className="bg-white p-2">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="name">Nom</label>
                                    <input
                                        className="input-field w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Votre nom"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="phone">Téléphone</label>
                                    <PhoneInput
                                        country={'mg'}
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        containerClass="phone-input-field"
                                        inputClass="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                        specialLabel=""
                                        masks={{ mg: '.. .. ... ..' }}
                                        autoFormat={true}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="email">Email</label>
                                    <input
                                        className="input-field w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Votre email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="subject">Sujet</label>
                                    <input
                                        className="input-field w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Le sujet de votre message"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="message">Message</label>
                                    <textarea
                                        className="input-field w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Votre message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded focus:outline-none focus:shadow-outline transition duration-300"
                                    >
                                        Envoyer
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1.5 px-3 rounded focus:outline-none focus:shadow-outline transition duration-300"
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ContactFormModal;
