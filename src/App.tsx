import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css';
import Home from './pages/Home';
import Mention from './pages/Mention';
import { Context } from './Context/Context';

export default function App() {
 const invoice = {
  reference: ' ',
  date: ' ',
  paymentRef: ' ',
  freelanceNameSociety: ' ',
  freelanceName: ' ',
  freelanceStreet: ' ',
  freelanceCity: ' ',
  freelanceSiret: ' ',
  societyName: ' ',
  societyStreet: ' ',
  societyCity: ' ',
  societyContact: ' ',
  societyImmatriculation: ' ',
  societyTVAinterco: ' ',
  benificiaryName: ' ',
  iban: ' ',
  bic: ' ',
  prestationName: ' ',
  prestationDescription: ' ',
  prestationQuantity: 0,
  prestationPrice: 0,
  prestationTotal: 0,
  prestationTVA: 0,
  priceTVA: 0,
 };

 const [context, setContext] = useState(invoice);
 return (
  <Context.Provider value={[context, setContext]}>
   <Router>
    <Layout>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentions-legales" element={<Mention />} />
     </Routes>
    </Layout>
   </Router>
  </Context.Provider>
 );
}
