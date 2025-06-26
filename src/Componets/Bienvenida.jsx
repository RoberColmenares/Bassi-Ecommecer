import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bienvenida = () => {
  const navigate = useNavigate();

  const handleComenzar = () => {
    navigate('/'); // Navega a Principal (ruta '/')
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h1>¡Bienvenido a Bassi E-commerce!</h1>
      <p>Explora nuestra selección de pizzas deliciosas y mucho más.</p>
      <button
        onClick={handleComenzar}
        style={{
          marginTop: '20px',
          padding: '10px 30px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#ff6347',
          color: 'white',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e5533d'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff6347'}
      >
        Comenzar
      </button>
    </div>
  );
};

export default Bienvenida;
