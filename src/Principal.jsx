import { useState } from 'react';
import './SignUp.css';   

const Principal = () => {
  return (
    <div>
      <h2>Pantalla Principal</h2>
      <Buscador />
    </div>
  );
};

const Buscador = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const datos = ['manzana', 'banana', 'uva', 'naranja', 'sandía'];

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    const filtrados = datos.filter(item =>
      item.toLowerCase().includes(valor.toLowerCase())
    );
    setResultados(filtrados);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar fruta..."
        value={busqueda}
        onChange={manejarCambio}
      />
      <ul>
        {resultados.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Principal;
