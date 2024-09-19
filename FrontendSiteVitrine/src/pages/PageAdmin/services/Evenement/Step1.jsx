// Step1.js
import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

const Step1 = ({ title, setTitle, category, setCategory, categories, startDate, setStartDate, endDate, setEndDate, location, setLocation }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label>Titre</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Titre de l'événement"
                        className="w-full p-2 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                    />
                </div>
                <div>
                    <label>Catégorie de l'évènement</label>
                    <Select
                        value={category}
                        onChange={setCategory}
                        options={categories}
                        placeholder="Sélectionner une catégorie"
                        className="w-[350px] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-[300px] p-2 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                        placeholderText="Sélectionner la date de début"
                    />
                </div>
                <div>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="w-[300px] p-2 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                        placeholderText="Sélectionner la date de fin"
                    />
                </div>
            </div>
            <div>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Lieu de l'événement"
                    className="w-[450px] p-2 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                />
            </div>
        </div>
    );
};

export default Step1;
