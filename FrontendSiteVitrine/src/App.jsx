import React from 'react';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Faq from './components/Faq';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContactFormPage from './components/ContactFormPage';
import Home from './utils/Home';

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-form" element={<ContactFormPage />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
