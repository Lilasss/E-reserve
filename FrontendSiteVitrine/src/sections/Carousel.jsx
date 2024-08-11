import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBed, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const items = [
    { title: 'EVENEMENT', icon: faCalendarAlt },
    { title: 'CHAMBRE', icon: faBed },
    { title: 'TRANSPORT', icon: faCar },
];

const StaticDisplay = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Nos Services</h2>
            <div className="w-full max-w-4xl">
                <div className="flex justify-center items-center space-x-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-1/3 flex flex-col items-center justify-center p-6 transition-transform duration-300 transform hover:scale-105"
                        >
                            <div
                                className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-600 transition-transform duration-300 transform hover:scale-110"
                            >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className="text-white text-4xl"
                                />
                            </div>
                            <p className="mt-4 text-xl font-medium text-gray-600 transition-transform duration-300 transform hover:scale-105">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StaticDisplay;
