import React from 'react';
import images from '../../assets/six.jpeg';
import { FaCalendarAlt, FaBus, FaSearch, FaChevronDown } from 'react-icons/fa';
import Footer from '../../../../layout/Footer';
import BarNav from '../BarNav';
import dodoImage from '../../assets/flyer.jpeg';
import TicketSteps from '../../../../sections/SiteVitrine1/TicketSteps';
import TicketStepsImage from '../../assets/show.jpg';

function Event() {
    return (
        <>
            <BarNav />

            <div className="relative bg-[#0A5DA6] pt-0">
                <img src={images} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="relative container mx-auto py-6 px-4">
                    <ul className="flex space-x-6 text-white mb-8 justify-center">
                        <li className="flex items-center space-x-2 px-6 py-3 border border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-800 transition ease-in-out duration-300">
                            <FaCalendarAlt className="text-xl" />
                            <span className="text-lg font-medium">Événement</span>
                        </li>
                        <li className="flex items-center space-x-2 px-6 py-3 border border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-800 transition ease-in-out duration-300">
                            <FaBus className="text-xl" />
                            <span className="text-lg font-medium">Transport</span>
                        </li>
                    </ul>

                    <div className="flex flex-col lg:flex-row items-center lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="w-full lg:w-80">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Rechercher un événement..."
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 shadow-md placeholder-gray-500 text-gray-700"
                                />
                                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                        <div className="w-full lg:w-80">
                            <div className="relative">
                                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 shadow-md text-gray-700 appearance-none">
                                    <option value="">Sélectionner un mois</option>
                                    <option value="janvier">Janvier</option>
                                    <option value="février">Février</option>
                                    <option value="mars">Mars</option>
                                    <option value="avril">Avril</option>
                                    <option value="mai">Mai</option>
                                    <option value="juin">Juin</option>
                                    <option value="juillet">Juillet</option>
                                    <option value="août">Août</option>
                                    <option value="septembre">Septembre</option>
                                    <option value="octobre">Octobre</option>
                                    <option value="novembre">Novembre</option>
                                    <option value="décembre">Décembre</option>
                                </select>
                                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                        <div className="w-full lg:w-80">
                            <div className="relative">
                                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 shadow-md text-gray-700 appearance-none">
                                    <option value="">Sélectionner une catégorie</option>
                                    <option value="spectacles">Spectacles</option>
                                    <option value="concerts">Concerts</option>
                                    <option value="foires">Foires et séminaires</option>
                                    <option value="sports">Sports</option>
                                    <option value="loisirs">Loisirs</option>
                                    <option value="culture">Culture</option>
                                </select>
                                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-16 px-48">
                <h2 className="text-center text-2xl font-bold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>TOP ÉVÈNEMENTS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="relative flex justify-center items-center">
                        <img src={dodoImage} className="rounded-lg shadow-lg h-64 w-full object-cover" />
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src={dodoImage} className="rounded-lg shadow-lg h-64 w-full object-cover" />
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src={dodoImage} className="rounded-lg shadow-lg h-64 w-full object-cover" />
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src={dodoImage} className="rounded-lg shadow-lg h-64 w-full object-cover" />
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src={dodoImage} className="rounded-lg shadow-lg h-64 w-full object-cover" />
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src={dodoImage} className="rounded-lg shadow-lg h-64 w-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <TicketSteps />
            </div>

            <div className="flex justify-center items-center py-10">
                <div className="w-full max-w-4xl p-5 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="lg:w-1/2 p-5">
                            <img src={TicketStepsImage} alt="TicketSteps" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                        <div className="lg:w-1/2 p-5 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Gérez facilement vos services de réservations</h2>
                            <p className="text-gray-600 mb-6 text-center lg:text-left">
                                E-reserve est une plateforme 100% en ligne de gestion de service de réservation incluant : Billetterie en ligne, inscriptions, invitations, contrôle d’accès, marketing, etc... Elle permet l’administration et la supervision en temps réel de votre événement.
                            </p>
                            <button className="bg-[#0A5DA6] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1f405d] transition duration-300 mx-auto lg:mx-0">
                                Créer un événement
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-32">
                <Footer />
            </div>
        </>
    );
}

export default Event;
