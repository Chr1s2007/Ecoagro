import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import DairyProductsGrid from './DairyProductsGrid';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/segunda-pagina" element={<DairyProductsGrid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;