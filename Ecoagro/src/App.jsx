import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from "./Loginform";
import DairyProductsGrid from "./DairyProductsGrid"; 
import Inicio from ".//grocery"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Loginform" element={<LoginForm />} />
          <Route path="/Inicio" element={<Inicio/>} />
          <Route path="/dairy-products" element={<DairyProductsGrid />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
