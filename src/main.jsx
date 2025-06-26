import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ContextoProvider from './Context/Contexcart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Bassi-Ecommecer">
      <ContextoProvider>
        <App />
      </ContextoProvider>
    </BrowserRouter>
  </StrictMode>
);