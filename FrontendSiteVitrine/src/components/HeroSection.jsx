import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/hero-image.jpg'; // Assurez-vous d'avoir cette image ou remplacez-la par une autre

const HeroSection = () => {
    return (
        <section id="hero" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <motion.h2
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Découvrez E-Reserve
                </motion.h2>
                <motion.p
                    className="text-lg mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    La plateforme de réservation pour tous vos besoins
                </motion.p>
                <motion.a
                    href="#about"
                    className="text-white bg-yellow-500 py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    En savoir plus
                </motion.a>
            </div>
        </section>
    );
}

export default HeroSection;
