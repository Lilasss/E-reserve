import React from 'react';
import Home from './pages/Home';
import ReservationForm from './pages/PageUser/ReservationForm';
import Reserve from './pages/PageUser/Reserve';
import Navbar from './pages/PageUser/Navbar';
import BarNav from './pages/PageUser/SiteVitrineUser/BarNav';
import Carousel from './pages/PageUser/SiteVitrineUser/Caroussel';
import AdminPage from './pages/PageSuperAdmin/Adminpage';
import Event from './pages/PageUser/SiteVitrineUser/Evenement/Event';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>
      {/* style={{ fontFamily: 'Poppins, sans-serif' }} */}
      <Event />
      {/* <Home /> */}
      {/* <Reserve /> */}
      {/* <Carousel /> */}



    </>
  );
}

export default App;
