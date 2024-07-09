import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ContactFormPage from './sections/ContactFormPage';

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
