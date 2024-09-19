import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransportReservationForm = ({ formData, setFormData, nextStep }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) =>
    setFormData((prev) => ({ ...prev, date_depart: date }));

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  // Générer les options avec des multiples de 4 + 2
  const generateSeatOptions = () => {
    let options = [];
    for (let i = 1; i <= 10; i++) { // Limite jusqu'à 42 places (modifiable)
      const seatNumber = 4 * i + 2; // Formule pour obtenir les valeurs 4n + 2
      options.push(seatNumber);
    }
    return options;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <div>
          <label>Catégorie</label>
          <select
            name="categorie"
            value={formData.categorie}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none"
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="Taxi">Taxi-brousse</option>
            <option value="Train">Train</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <div>
            <label>Date de départ</label>
            <DatePicker
              selected={formData.date_depart}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
          <div>
            <label>Heure de départ</label>
            <input
              type="time"
              name="heure_depart"
              value={formData.heure_depart}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label>Lieu de départ</label>
          <input
            type="text"
            name="lieu_depart"
            value={formData.lieu_depart}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label>Lieu d'arrivée</label>
          <input
            type="text"
            name="lieu_arriver"
            value={formData.lieu_arriver}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label>Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label>Nombre de places</label>
          <select
            name="nombre_place"
            value={formData.nombre_place}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none"
          >
            <option value="">Sélectionnez un nombre de places</option>
            {generateSeatOptions().map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Prix</label>
          <input
            type="number"
            name="prix"
            value={formData.prix}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div className="col-span-2">
          <label>Insérer une image</label>
          <input
            type="file"
            name="image_path"
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div className="col-span-2 text-center w-32">
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold p-3 rounded-lg hover:bg-green-600"
          >
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransportReservationForm;
