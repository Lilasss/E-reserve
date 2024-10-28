// src/pages/PageUser/SiteVitrineUser/Evenement/Event.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import images from '../../assets/six.jpeg';
import { FaCalendarAlt, FaBus, FaSearch, FaChevronDown, FaArrowUp } from 'react-icons/fa';
import Footer from '../../../../layout/Footer';
import BarNav from '../BarNav';
import dodoImage from '../../assets/flyer.jpeg';
import image1 from '../../assets/fca.jpeg';
import image2 from '../../assets/SPORT.jpeg';
import image3 from '../../assets/Culture.jpeg';
import image4 from '../../assets/Education.jpeg';
import TicketSteps from '../../../../sections/SiteVitrine1/TicketSteps';
import TicketStepsImage from '../../assets/show.jpg';
import { Link, useNavigate } from 'react-router-dom';
import TicketTransport from '../../../PageAdmin/views/TicketTransport';

// Définition des événements
const events = [
  { id: 1, image: dodoImage },
  { id: 2, image: image4 },
  { id: 3, image: image3 },
  { id: 4, image: image3 },
  { id: 5, image: image1 },
  { id: 6, image: image2 }
];

function Event() {
  const [showScroll, setShowScroll] = useState(false);
  const [data, setData] = useState(null); // Initialisation à null
  const navigate = useNavigate();

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 200) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 200) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreateEventClick = () => {
    navigate('/home');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/auth/success', {
          withCredentials: true, // Inclure les cookies dans la requête
        });

        if (res.status === 200) { // Vérifie le statut de la réponse
          console.log(res);
          setData(res.data); // Mise à jour de l'état avec les données utilisateur

          // Stocker les données dans le sessionStorage
          sessionStorage.setItem('userData', JSON.stringify(res.data));
        } else {
          console.log(`Erreur : code de statut ${res.status}`);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error); // Gestion améliorée des erreurs
      }
    };

    fetchData(); // Appel de la fonction fetchData au montage du composant

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []); // Exécuter une seule fois au montage

  return (
    <>
      <BarNav />


      <div className="relative bg-[#0A5DA6] pt-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <img src={images} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />

        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold text-white text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Réserver des billets d'événements
          </h1>
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
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 shadow-md placeholder-gray-500 text-gray-500 appearance-none">
                  <option value="">Sélectionner un mois</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="w-full lg:w-80">
              <div className="relative">
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 shadow-md text-gray-500 appearance-none">
                  <option value="">Sélectionner une catégorie</option>
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
          {events.map(event => (
            <Link to={`/event/${event.id}`} key={event.id} className="relative flex justify-center items-center">
              <img src={event.image} className="rounded-lg shadow-lg h-64 w-full object-cover" alt="Event" />
            </Link>
          ))}
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
              <button
                className="bg-[#0A5DA6] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1f405d] transition duration-300 mx-auto lg:mx-0"
                onClick={handleCreateEventClick}
              >
                Créer un événement
              </button>
            </div>
          </div>
        </div>
      </div>

      {showScroll && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={scrollToTop}
            className="bg-[#0A5DA6] text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
            <FaArrowUp className="text-xl" />
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}

// Fonction pour récupérer un cookie par son nom
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default Event;
