import React from 'react';
import { pizzas } from './pizzas.js';
import PizzaTarjeta from './PizzaTarjeta.jsx';

const Principal = () => {
  // Verificación si no hay pizzas
  if (!pizzas || pizzas.length === 0) {
    return <p>No hay pizzas disponibles.</p>;
  }

  return (
  <div className='contenedormax'> 

      <div className="contenedor-pizzas">
      {pizzas.map((pizza) => (
        <PizzaTarjeta
          key={pizza.id}
          id={pizza.id}
          imagen={pizza.img}
          nombre={pizza.name}
          ingredientes={pizza.ingredients}
          precio={pizza.price}
        />
      ))}
    </div>

  </div>
  );
};

export default Principal;
