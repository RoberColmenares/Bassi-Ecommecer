import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import ContextoProvider from './Context/Contexcart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ContextoProvider>
        <App />
      </ContextoProvider>
    </HashRouter>
  </StrictMode>
);
