import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'react-datepicker/dist/react-datepicker.css';
import '../views/CSS/CreateEvent.css';

const categories = [
    { value: 'spectacle_concerts', label: 'Spectacles & Concerts' },
    { value: 'foires_seminaires', label: 'Foires & Séminaires' },
    { value: 'sports', label: 'Sports' },
    { value: 'loisirs', label: 'Loisirs' },
    { value: 'culture', label: 'Culture' }
];

const CreateEvent = () => {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [noReservation, setNoReservation] = useState(false);
    const [vip, setVip] = useState(false);
    const [price, setPrice] = useState('');
    const [vipPrice, setVipPrice] = useState('');
    const [normalSeats, setNormalSeats] = useState('');
    const [vipSeats, setVipSeats] = useState('');

    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePrevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFilePreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 4) {
            handleNextStep();
        } else {
            console.log({ title, category, startDate, endDate, location, description, file, noReservation, vip, price, vipPrice, normalSeats, vipSeats });
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
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <div>
                                <label>Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Ajouter une description"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="w-[450px] p-2 border text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                                />
                                {filePreview && (
                                    <img
                                        src={filePreview}
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
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Prix VIP</label>
                                            <input
                                                type="text"
                                                value={vipPrice}
                                                onChange={(e) => setVipPrice(e.target.value)}
                                                placeholder="Définir le prix VIP"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
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
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                                        />
                                    </div>
                                )}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Nombre de places normales</label>
                                        <input
                                            type="number"
                                            value={normalSeats}
                                            onChange={(e) => setNormalSeats(e.target.value)}
                                            placeholder="Places normales"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                                        />
                                    </div>

                                    <TransitionGroup>
                                        {vip && (
                                            <CSSTransition
                                                key="vipSeats"
                                                timeout={300}
                                                classNames="fade"
                                            >
                                                <div>
                                                    <label className="block text-sm font-medium mb-2">Nombre de places VIP</label>
                                                    <input
                                                        type="number"
                                                        value={vipSeats}
                                                        onChange={(e) => setVipSeats(e.target.value)}
                                                        placeholder="Places VIP"
                                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700 transition-all duration-300"
                                                    />
                                                </div>
                                            </CSSTransition>
                                        )}
                                    </TransitionGroup>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div>
                            <p className="text-lg font-semibold">
                                Vérif
                            </p>
                        </div>
                    )}

                    <div className="flex justify-between mt-8">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={handlePrevStep}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                            >
                                Précédent
                            </button>
                        )}
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                        >
                            {step < 4 ? 'Passer à l\'étape suivante' : 'Soumettre'}
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
