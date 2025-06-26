import React from 'react';

const Bienvenida = ({ onStart }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10000,
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '400px',
        width: '90%',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)'
      }}>
        <h1>¡Bienvenido a Bassi E-commerce!</h1>
        <p>Esta solo es una app de maqueta para mis clientes</p>
        <button
          onClick={onStart}
          style={{
            marginTop: '20px',
            padding: '10px 30px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#ff6347',
            color: 'white',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e5533d'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff6347'}
        >
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default Bienvenida;
