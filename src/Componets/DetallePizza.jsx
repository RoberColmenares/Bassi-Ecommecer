import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Contextcart } from '../Context/Contexcart';

const DetallePizza = () => {
  const { pizzas, pizzasCarrito, setPizzasCarrito } = useContext(Contextcart);
  const { id } = useParams();

  // No es necesario convertir 'id' a número, ya que los 'id' en el array son cadenas
  // Buscar la pizza en el contexto usando el ID
  const pizza = pizzas.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  // Función para agregar la pizza al carrito
  const handleAgregar = () => {
    const nuevaPizza = {
      id: pizza.id,
      nombre: pizza.name,
      precio: pizza.price,
      imagen: pizza.img,
      ingredientes: pizza.ingredients,
      count: 1,
    };

    // Verificar si la pizza ya existe en el carrito
    const pizzaExistente = pizzasCarrito.find((p) => p.id === pizza.id);

    if (pizzaExistente) {
      const carritoActualizado = pizzasCarrito.map((p) =>
        p.id === pizza.id ? { ...p, count: p.count + 1 } : p
      );
      setPizzasCarrito(carritoActualizado);
    } else {
      setPizzasCarrito([...pizzasCarrito, nuevaPizza]);
    }
  };

  return (
    <div className="contenedor-detalle">
        <h1>Detalles de la Pizza</h1>

            <div className="pizza-detalle">

                <div className="imagen">
                    <img src={pizza.img}  />
                </div>

                <div className="descripcion">
                    <h2>{pizza.name}</h2>
                    <p>{pizza.desc}</p>
                    <h2>Ingredientes:</h2>

                    <ul>
                        {pizza.ingredients.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                        ))}
                    </ul>
                    
                        <div className="precio">
                            <h4>Precio: ${pizza.price}</h4>
                            <button onClick={handleAgregar}>Añadir</button>
                        </div>

                </div>
                
            </div>
    </div>
  );
};

export default DetallePizza;
