import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0A5DA6] to-[#0A5DA6] text-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6">Contactez-nous</h2>
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-between mb-8 text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-3xl text-yellow-300 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold">Adresse</h3>
                            <p className="text-white">Antananarivo, Madagascar</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className="text-3xl text-yellow-300 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold">Téléphone</h3>
                            <p className="text-white">+261 34 00 568 89</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="text-3xl text-yellow-300 mr-4" />
                        <div>
                            <h3 className="text-lg font-bold">Email</h3>
                            <p className="text-white">ereserve@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="https://www.facebook.com/tah.shou.7" className="text-3xl hover:text-yellow-300 transition">
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com" className="text-3xl hover:text-yellow-300 transition">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/tah.shou/" className="text-3xl hover:text-yellow-300 transition">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com" className="text-3xl hover:text-yellow-300 transition">
                        <FaLinkedin />
                    </a>
                </div>
                <p className="text-yellow-300 text-sm">&copy; 2024 E-Reserve. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
