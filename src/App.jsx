import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Principal from './Componets/Principal'; // Ajusta la ruta según tu estructura
import DetallePizza from './Componets/DetallePizza';
import Barra from './Componets/Barra'; // Ajusta la ruta según tu estructura
import Cart from './Views/Cart';
import './assets/App.css'
import Header from './Componets/Header';
import Footer from './Componets/Footer';

function App() {
  return (
   <>
    <Barra></Barra>
    <Header></Header>
    <Routes>
  <Route path="/" element={<Principal />} />
  <Route path="/home" element={<Principal />} />
      <Route path="/pizza/:id" element={<DetallePizza />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer></Footer>

   </>
  );
}

export default App;
