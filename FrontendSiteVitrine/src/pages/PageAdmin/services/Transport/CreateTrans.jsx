import React, { useState } from 'react';
import TransportReservationForm from './TransportReservationForm';
import SeatSelection from './SeatSelection';

const CreateTrans = () => {
  const [step, setStep] = useState(1); // État pour gérer l'étape
  const [formData, setFormData] = useState({
    categorie: "",
    date_depart: new Date(),
    heure_depart: "08:00",
    image_path: "",
    lieu_arriver: "",
    lieu_depart: "",
    name: "",
    nombre_place: 1,
    prix: "",
  });

  // Fonction pour aller à l'étape suivante
  const nextStep = () => {
    setStep(step + 1);
  };

  // Fonction pour revenir à l'étape précédente
  const prevStep = () => {
    setStep(step - 1);
  };

  // Rendu conditionnel selon l'étape
  return (
    <div>
      {step === 1 && (
        <TransportReservationForm formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <SeatSelection formData={formData} prevStep={prevStep} />
      )}
    </div>
  );
};

export default CreateTrans;
