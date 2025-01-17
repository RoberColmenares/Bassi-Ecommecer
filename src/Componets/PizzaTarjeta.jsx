import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contextcart } from "../Context/Contexcart"; // Importa el contexto

const PizzaTarjeta = ({ id, imagen, nombre, descripcion, ingredientes, precio }) => {
  const { pizzasCarrito, setPizzasCarrito } = useContext(Contextcart); // Usamos el contexto
  const navigate = useNavigate();

  // Función para agregar la pizza al carrito
  const handleAgregar = () => {
    const nuevaPizza = {
      id,
      nombre,
      precio,
      imagen,
      ingredientes,
      count: 1,
    };

    // Verificamos si la pizza ya existe en el carrito
    const pizzaExistente = pizzasCarrito.find((p) => p.id === id);

    if (pizzaExistente) {
      // Incrementar cantidad
      const pizzasActualizadas = pizzasCarrito.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      );
      setPizzasCarrito(pizzasActualizadas);
    } else {
      // Agregar nueva pizza
      setPizzasCarrito([...pizzasCarrito, nuevaPizza]);
    }
  };

  // Navegar al detalle de la pizza
  const verDetalle = () => {
    navigate(`/pizza/${id}`);
  };

  return (
    <div className="card-pizza">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} />
      <h2>Ingredientes</h2>
      <div>
        <ul>
          {ingredientes.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <p>Precio: ${precio}</p>
      <div className="btn-contenedor">
        <button onClick={verDetalle}>Ver más</button>
        <button onClick={handleAgregar}>Añadir</button>
      </div>
    </div>
  );
};

export default PizzaTarjeta;
