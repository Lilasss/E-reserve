import React from 'react'
import BarNav from '../BarNav'
import Reserve from '../../Reserve'
import images from '../../assets/six.jpeg';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaBus } from 'react-icons/fa';
import TicketSteps from '../../../../sections/SiteVitrine1/TicketSteps';
import Footer from '../../../../layout/Footer';

function Transport() {
    return (
        <><BarNav />
            <div className="relative bg-[#0A5DA6] pt-0">
                <img src={images} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="relative container mx-auto py-6 px-4">
                    <ul className="flex space-x-6 text-white mb-8 justify-center mt-4">
                        <Link to="/events" className="flex items-center space-x-2 px-6 py-3 border border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-800 transition ease-in-out duration-300">
                            <FaCalendarAlt className="text-xl" />
                            <span className="text-lg font-medium">Événement</span>
                        </Link>
                        <Link to="/transports" className="flex items-center space-x-2 px-6 py-3 border border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-800 transition ease-in-out duration-300">
                            <FaBus className="text-xl" />
                            <span className="text-lg font-medium">Transport</span>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="mt-0"><Reserve /></div>
            <div className="mt-6">
                <TicketSteps />
            </div>
            <div className="pt-12">
                <Footer />
            </div>
        </>
    )
}

export default Transport