import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import '../../views/CSS/CreateEvent.css';

const categories = [
    { value: 'spectacle_concerts', label: 'Spectacles & Concerts' },
    { value: 'foires_seminaires', label: 'Foires & Séminaires' },
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
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label>Titre</label>
                                    <input
                                        type="text"
                                        value={titre}
                                        onChange={(e) => setTitre(e.target.value)}
                                        placeholder="Titre de l'événement"
                                        className="w-full p-2 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                                    />
                                </div>
                                <div>
                                    <label>Catégorie de l'événements</label>
                                    <Select
                                        value={categorie_event}
                                        onChange={setCategorieEvent}
                                        options={categories}
                                        placeholder="Sélectionner une catégorie"
                                        className="w-[350px] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <DatePicker
                                        selected={date}
                                        onChange={(date) => setDate(date)}
                                        className="w-[300px] p-2 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                                        placeholderText="Sélectionner la date de début"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={lieu}
                                    onChange={(e) => setLieu(e.target.value)}
                                    placeholder="Lieu de l'événement"
                                    className="w-[450px] p-2 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                                />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <div>
                                <label>Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Ajouter une description"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                                />
                            </div>
                            <div>
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    className="w-[450px] p-2 border text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
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
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Prix VIP</label>
                                            <input
                                                type="text"
                                                value={vipPrice}
                                                onChange={(e) => setVipPrice(e.target.value)}
                                                placeholder="Définir le prix VIP"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
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
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
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
                                            placeholder="Places VIP"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                                        />
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Nombre de places normales</label>
                                    <input
                                        type="number"
                                        value={normalSeats}
                                        onChange={(e) => setNormalSeats(e.target.value)}
                                        placeholder="Places normales"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handlePrevStep}
                            className={`px-4 py-2 rounded-md ${step === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-900'
                                }`}
                        >
                            Précédent
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-900"
                        >
                            {step === 4 ? 'Soumettre' : 'Suivant'}
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/5 p-4 bg-gray-100 h-screen flex flex-col justify-center items-center">
                {[1, 2, 3, 4].map((stepNumber) => (
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
                        {stepNumber < 4 && (
                            <div className="h-8 border-l-2 border-gray-300"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateEvent;