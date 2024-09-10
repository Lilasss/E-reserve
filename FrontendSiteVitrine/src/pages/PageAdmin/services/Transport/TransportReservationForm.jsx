import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransportReservationForm = () => {
  const [formData, setFormData] = useState({
    categorie: "",
    date_depart: new Date(), // Initialiser avec la date actuelle
    heure_depart: "10:00",
    image_path: "",
    lieu_arriver: "",
    lieu_depart: "",
    name: "",
    nombre_place: 1,
    prix: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date_depart: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Réservation de Transport
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Catégorie */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Catégorie
          </label>
          <input
            type="text"
            name="categorie"
            value={formData.categorie}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Entrez la catégorie"
            required
          />
        </div>

        {/* Date de départ (Datepicker) */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Date de départ
          </label>
          <DatePicker
            selected={formData.date_depart}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>

        {/* Heure de départ (input[type="time"]) */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Heure de départ
          </label>
          <input
            type="time"
            name="heure_depart"
            value={formData.heure_depart}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            required
          />
        </div>

        {/* Lieu de départ */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Lieu de départ
          </label>
          <input
            type="text"
            name="lieu_depart"
            value={formData.lieu_depart}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Entrez le lieu de départ"
            required
          />
        </div>

        {/* Lieu d'arrivée */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Lieu d'arrivée
          </label>
          <input
            type="text"
            name="lieu_arriver"
            value={formData.lieu_arriver}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Entrez le lieu d'arrivée"
            required
          />
        </div>

        {/* Nom */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Nom
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Entrez votre nom"
            required
          />
        </div>

        {/* Nombre de places */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Nombre de places
          </label>
          <input
            type="number"
            name="nombre_place"
            value={formData.nombre_place}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            min="1"
            required
          />
        </div>

        {/* Prix */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Prix
          </label>
          <input
            type="number"
            name="prix"
            value={formData.prix}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Entrez le prix"
            required
          />
        </div>

        {/* Image path */}
        <div className="col-span-2">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Image du transport
          </label>
          <input
            type="file"
            name="image_path"
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold p-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Réserver
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransportReservationForm;
