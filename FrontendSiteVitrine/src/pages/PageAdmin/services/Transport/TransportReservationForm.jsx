import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TransportReservationForm = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const initialFormData = {
    categorie: "",
    dateDepart: "",
    heureDepart: "",
    lieuDepart: "",
    lieuArriver: "",
    name: "",
    nombrePlace: "",
    prix: "",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = date.toISOString().split('T')[0]; // Format YYYY-MM-DD
      setFormData((prev) => ({ ...prev, dateDepart: formattedDate }));
    } else {
      setFormData((prev) => ({ ...prev, dateDepart: '' })); // Reset if no date selected
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.categorie) errors.categorie = "La catégorie est requise.";
    if (!formData.dateDepart) errors.dateDepart = "La date de départ est requise.";
    if (!formData.heureDepart) errors.heureDepart = "L'heure de départ est requise.";
    if (!formData.lieuDepart) errors.lieuDepart = "Le lieu de départ est requis.";
    if (!formData.lieuArriver) errors.lieuArriver = "Le lieu d'arrivée est requis.";
    if (!formData.name) errors.name = "Le nom est requis.";
    if (!formData.nombrePlace) errors.nombrePlace = "Le nombre de places est requis.";
    if (!formData.prix) errors.prix = "Le prix est requis.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Veuillez remplir tous les formulaires !");
      return;
    }
    try {
      console.log(formData);
      await axios.post(`http://localhost:8080/api/admin/transport/add`, formData);
      toast.success("Transport ajouté avec succès !");
      
      // Réinitialiser le formulaire après succès
      setFormData(initialFormData);
      setErrors({}); // Réinitialiser les erreurs
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
      toast.error("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  const generateSeatOptions = () => {
    return Array.from({ length: 10 }, (_, i) => 4 * (i + 1) + 2);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <div>
          <label className="block mb-1">Catégorie</label>
          <select
            name="categorie"
            value={formData.categorie}
            onChange={handleInputChange}
            className={`w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none ${errors.categorie ? 'border-red-500' : ''}`}
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="TAXI_BROUSSE">Taxi-brousse</option>
            <option value="TRAIN">Train</option>
          </select>
          {errors.categorie && <p className="text-red-500 text-sm">{errors.categorie}</p>}
        </div>

        <div className="flex space-x-4">
          <div>
            <label className="block mb-1">Date de départ</label>
            <DatePicker
              selected={formData.dateDepart ? new Date(formData.dateDepart) : null}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${errors.dateDepart ? 'border-red-500' : ''}`}
            />
            {errors.dateDepart && <p className="text-red-500 text-sm">{errors.dateDepart}</p>}
          </div>
          <div>
            <label className="block mb-1">Heure de départ</label>
            <input
              type="time"
              name="heureDepart"
              value={formData.heureDepart}
              onChange={handleInputChange}
              className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none ${errors.heureDepart ? 'border-red-500' : ''}`}
            />
            {errors.heureDepart && <p className="text-red-500 text-sm">{errors.heureDepart}</p>}
          </div>
        </div>

        <div>
          <label className="block mb-1">Lieu de départ</label>
          <input
            type="text"
            name="lieuDepart"
            value={formData.lieuDepart}
            onChange={handleInputChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${errors.lieuDepart ? 'border-red-500' : ''}`}
          />
          {errors.lieuDepart && <p className="text-red-500 text-sm">{errors.lieuDepart}</p>}
        </div>

        <div>
          <label className="block mb-1">Lieu d'arrivée</label>
          <input
            type="text"
            name="lieuArriver"
            value={formData.lieuArriver}
            onChange={handleInputChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${errors.lieuArriver ? 'border-red-500' : ''}`}
          />
          {errors.lieuArriver && <p className="text-red-500 text-sm">{errors.lieuArriver}</p>}
        </div>

        <div>
          <label className="block mb-1">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-1">Nombre de places</label>
          <select
            name="nombrePlace"
            value={formData.nombrePlace}
            onChange={handleInputChange}
            className={`w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none ${errors.nombrePlace ? 'border-red-500' : ''}`}
          >
            <option value="">Sélectionnez un nombre de places</option>
            {generateSeatOptions().map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.nombrePlace && <p className="text-red-500 text-sm">{errors.nombrePlace}</p>}
        </div>

        <div>
          <label className="block mb-1">Prix</label>
          <input
            type="number"
            name="prix"
            value={formData.prix}
            onChange={handleInputChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none ${errors.prix ? 'border-red-500' : ''}`}
          />
          {errors.prix && <p className="text-red-500 text-sm">{errors.prix}</p>}
        </div>

        <div className="col-span-2 text-center w-32">
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold p-3 rounded-lg hover:bg-green-600"
          >
            Valider
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TransportReservationForm;
