import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import '../../views/CSS/CreateEvent.css';
import Map from './Map';
import axios from 'axios';

const categories = [
    { value: 'spectacles', label: 'Spectacles' },
    { value: 'concerts', label: 'Concerts' },
    { value: 'foires', label: 'Foires' },
    { value: 'seminaires', label: 'Séminaires' },
    { value: 'sports', label: 'Sports' },
    { value: 'loisirs', label: 'Loisirs' },
    { value: 'culture', label: 'Culture' }
];

const CreateEvent = () => {
    const [step, setStep] = useState(1);
    const [titre, setTitre] = useState('');
    const [categorie_event, setCategorieEvent] = useState(null);
    const [date, setDate] = useState(null);
    const [lieu, setLieu] = useState('');
    const [description, setDescription] = useState('');
    const [image_path, setImagePath] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [vip, setVip] = useState(false);
    const [price, setPrice] = useState('');
    const [vipPrice, setVipPrice] = useState('');
    const [normalSeats, setNormalSeats] = useState('');
    const [vipSeats, setVipSeats] = useState('');
    const [position, setPosition] = useState([0, 0]);

    const navigate = useNavigate();

    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePrevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigate('/admin/evenement');
        }
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        setImagePath(selectedFile);
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleLieuChange = async (e) => {
        setLieu(e.target.value);
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${e.target.value}`);
            if (response.data && response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setPosition([parseFloat(lat), parseFloat(lon)]);
            }
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 4) {
            handleNextStep();
        } else {
            console.log({
                titre,
                categorie_event,
                date,
                lieu,
                description,
                image_path,
                vip,
                price,
                vipPrice,
                normalSeats,
                vipSeats
            });
        }
    };

    return (
        <div className="flex">
            <div className="w-4/5 p-6">
                <h1 className="text-2xl font-semibold mb-4">
                    {step === 1 ? 'Créer un Événement' : step === 3 ? 'Création de Billet' : 'Détails'}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 && (
                        <>
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label>Titre</label>
                                        <input
                                            type="text"
                                            value={titre}
                                            onChange={(e) => setTitre(e.target.value)}
                                            placeholder="Titre de l'événement"
                                            className="w-full p-2 pl-3 border border-gray-300 rounded-md focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label>Catégorie de l'événements</label>
                                        <select
                                            value={categorie_event ? categorie_event.value : ''}
                                            onChange={(e) =>
                                                setCategorieEvent({ value: e.target.value, label: e.target.options[e.target.selectedIndex].text })
                                            }
                                            className="appearance-none w-[350px] p-2 pl-3 border text-gray-600 border-gray-300 rounded-lg focus:outline-none"
                                        >
                                            <option value="" disabled hidden>Sélectionner une catégorie</option>
                                            {categories.map((category) => (
                                                <option key={category.value} value={category.value}>
                                                    {category.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            value={lieu}
                                            onChange={handleLieuChange}
                                            placeholder="Lieu de l'événement"
                                            className="w-[450px] p-2 pl-3 border border-gray-300 rounded-md focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <DatePicker
                                            selected={date}
                                            onChange={(date) => setDate(date)}
                                            className="w-[300px] p-2 pl-3 border border-gray-300 rounded-md focus:outline-none"
                                            placeholderText="Sélectionner la date"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Map position={position} setPosition={setPosition} className=" w-full h-[400px] border rounded-md" />
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <div>
                                <label>Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Ajouter une description"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    className="w-[450px] p-2 border text-sm rounded-md focus:outline-none"
                                />
                                {imagePreview && (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="mt-4 w-[300px] h-auto rounded-md"
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6">
                            <div className="mt-4 flex items-center">
                                <input
                                    type="checkbox"
                                    checked={vip}
                                    onChange={(e) => setVip(e.target.checked)}
                                    className="mr-2"
                                />
                                <label>VIP</label>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {vip ? (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Prix normal</label>
                                            <input
                                                type="text"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                placeholder="Définir le prix normal"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Prix VIP</label>
                                            <input
                                                type="text"
                                                value={vipPrice}
                                                onChange={(e) => setVipPrice(e.target.value)}
                                                placeholder="Définir le prix VIP"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Prix</label>
                                        <input
                                            type="text"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            placeholder="Définir le prix"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                                        />
                                    </div>
                                )}
                                {vip && (
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Nombre de places VIP</label>
                                        <input
                                            type="number"
                                            value={vipSeats}
                                            onChange={(e) => setVipSeats(e.target.value)}
                                            placeholder="Nombre de places VIP"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                                        />
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Nombre de places normales</label>
                                    <input
                                        type="number"
                                        value={normalSeats}
                                        onChange={(e) => setNormalSeats(e.target.value)}
                                        placeholder="Nombre de places normales"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="flex justify-between mt-8">
                        <button
                            type="button"
                            onClick={handlePrevStep}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-600"
                        >
                            {step === 1 ? 'Annuler' : 'Retour'}
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-900"
                        >
                            {step === 3 ? 'Soumettre' : 'Suivant'}
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/5 p-4 bg-gray-100 h-screen flex flex-col justify-center items-center">
                {[1, 2, 3].map((stepNumber) => (
                    <div key={stepNumber} className="flex flex-col items-center">
                        <div
                            className={`mb-4 flex items-center justify-center h-12 w-12 rounded-full text-lg font-semibold cursor-pointer transition-colors duration-300 ${step === stepNumber
                                ? 'bg-gray-700 text-white'
                                : step > stepNumber
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-400 text-white'
                                }`}
                            onClick={() => setStep(stepNumber)}
                        >
                            {stepNumber}
                        </div>
                        {stepNumber < 3 && (
                            <div className="h-8 border-l-2 border-gray-300"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateEvent;
