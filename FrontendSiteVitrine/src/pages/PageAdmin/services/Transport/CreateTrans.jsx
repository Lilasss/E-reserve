import React, { useEffect, useState } from 'react';
import TransportReservationForm from './TransportReservationForm';
// Uncomment this if you want to use seat selection
// import SeatSelection from './SeatSelection';

const CreateTrans = () => {
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({
    categorie: "",
    dateDepart: "",
    heureDepart: "",
    lieuArriver: "",
    lieuDepart: "",
    name: "",
    nombrePlace: 0,
    prix: "",
    serviceId: null // Initialize with null
  });

  // Fetch the service from sessionStorage
  useEffect(() => {
    const storedService = sessionStorage.getItem('service');
    if (storedService) { // Corrected from storedServiceId to storedService
      const serviceData = JSON.parse(storedService); // Parse the stored service
      setService(serviceData);
      setFormData(prevFormData => ({
        ...prevFormData,
        serviceId: serviceData // Update formData with fetched service ID
      }));
      console.log('Service:', serviceData); // Log the service data to the console
    }
  }, []); // Run only once when the component mounts

  // Update the formData when the service is fetched from sessionStorage
  useEffect(() => {
    if (service) {
      setFormData(prevFormData => ({
        ...prevFormData,
        serviceId: service // Update the formData with the fetched service ID
      }));
    }
  }, [service]); // Trigger this effect whenever `service` changes

  return (
    <div>
      <TransportReservationForm formData={formData} setFormData={setFormData} />
      {/* Uncomment this if you want to use seat selection */}
      {/* <SeatSelection formData={formData} prevStep={prevStep} /> */}
    </div>
  );
};

export default CreateTrans;
