import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate('/segunda-pagina');
    }, 300);
  };

  return (
    <div className="phone-frame">
      <div className="home-container">
        <button
          onClick={handleButtonClick}
          className={`home-button ${clicked ? 'clicked' : ''}`}
        >
          <img
            src="/img/logo.png"
            alt="Botón principal"
            className="home-image"
          />
        </button>
      </div>
    </div>
  );
}

export default Home;
