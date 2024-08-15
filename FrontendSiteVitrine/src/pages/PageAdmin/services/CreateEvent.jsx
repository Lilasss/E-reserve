import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const categories = [
    { value: 'spectacle_concerts', label: 'Spectacles & Concerts' },
    { value: 'foires_seminaires', label: 'Foires & Séminaires' },
    { value: 'sports', label: 'Sports' },
    { value: 'loisirs', label: 'Loisirs' },
    { value: 'culture', label: 'Culture' }
];

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(null);
    const [eventDate, setEventDate] = useState(null);
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, category, eventDate, location });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Créer un Événement</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titre de l'événement"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <Select
                    value={category}
                    onChange={setCategory}
                    options={categories}
                    placeholder="Catégorie de l'événement"
                    className="w-full"
                />
                <DatePicker
                    selected={eventDate}
                    onChange={(date) => setEventDate(date)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Date de l'événement"
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Lieu"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Enregistrer
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
