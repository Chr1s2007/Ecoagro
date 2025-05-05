// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Importación del CSS global
import App from './App.jsx'; // Importación del componente principal

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

