import React, { useState, useEffect } from 'react';
import { pizzas as pizzasData } from '../Componets/pizzas.js';  // Asegúrate de que pizzas.js exporta correctamente los datos

export const Contextcart = React.createContext();

const ContextoProvider = ({ children }) => {
  const [pizzasCarrito, setPizzasCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [pizzas, setPizzas] = useState(pizzasData); // Aquí directamente asignamos el valor importado
  const [user, setUser] = useState(false);

  // Función para calcular el total
  const calcularTotal = () => {
    const total = pizzasCarrito.reduce(
      (total, pizza) => total + pizza.precio * pizza.count,
      0
    );
    setTotal(total);
  };

  useEffect(() => {
    calcularTotal();
  }, [pizzasCarrito]);

  return (
    <Contextcart.Provider
      value={{ pizzasCarrito, setPizzasCarrito, total, pizzas, setPizzas, user, setUser }}
    >
      {children}
    </Contextcart.Provider>
  );
};

export default ContextoProvider;
