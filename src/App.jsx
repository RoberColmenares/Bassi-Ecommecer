
import './assets/App.css'

import React, { useState } from 'react';
import Principal from './Componets/Principal';
import DetallePizza from './Componets/DetallePizza';
import Barra from './Componets/Barra';
import Cart from './Views/Cart';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Bienvenida from './Componets/Bienvenida';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <Barra />
      <Header />

<Routes>
  <Route path="/" element={<Bienvenida />} />
  <Route path="/home" element={<Principal />} />
  <Route path="/pizza/:id" element={<DetallePizza />} />
  <Route path="/cart" element={<Cart />} />
</Routes>

      <Footer />

      {showWelcome && <Bienvenida onStart={() => setShowWelcome(false)} />}
    </>
  );
}

export default App;
