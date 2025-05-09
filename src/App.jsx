import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from "./Loginform";
import DairyProductsGrid from "./DairyProductsGrid"; // Asegúrate de importar DairyProductsGrid

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/segunda-pagina" element={<LoginForm />} />
          <Route path="/dairy-products" element={<DairyProductsGrid />} /> {/* Aquí está la ruta al grid */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
