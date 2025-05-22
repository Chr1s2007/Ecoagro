import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navega automáticamente a los 3 segundos
      navigate('/Loginform');
    }, 4000);

    return () => clearTimeout(timer); // Limpieza si se desmonta
  }, [navigate]);

  return (
    <div className="phone-frame">
      <div className="home-container fade-in">
        <img
          src="/img/logo.png"
          alt="Logo principal"
          className="home-image"
        />
        <h2 className="home-text">Bienvenido</h2>
      </div>
    </div>
  );
}

export default Home;