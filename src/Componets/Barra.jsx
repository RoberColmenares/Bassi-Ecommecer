import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Contextcart } from "../Context/Contexcart"; // Asegúrate de la ruta correcta

const Barra = () => {
  const { total, user } = useContext(Contextcart);
  
  const estiloOpciones = ({ isActive }) => (isActive ? "estaActivo" : "opciones");

  return (
    <>
      <div className='contenedor-total'>
        <div className='barra'>
          {/* Enlace para Home */}
          <div>
            <NavLink className = "boton-barra" c to="/">
              <FontAwesomeIcon icon={faPizzaSlice} /> Home
            </NavLink>
          </div>

        

          {/* Enlace para el carrito con el total */}
          <div>
            <NavLink className="boton-barra" to="/cart">
              Total: ${total} <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Barra;
