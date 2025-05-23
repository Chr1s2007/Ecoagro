import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ← Importar useNavigate
import './Description.css';

export default function Description() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // ← Hook para navegación

  const handleClose = () => {
    navigate('/dairy-products'); // ← Cambia esto a la ruta exacta de tu app
  };

  return (
    <div className="description-page">
      <div className="phone-frame">
        <div className="description-container">
          <div className="description-header">
            <button className="close-button" onClick={handleClose}>
              <X size={24} />
            </button>
            <h2 className="product-title">QUESO DURO</h2>
          </div>

          <div className="description-content">
            <div className="product-image-container">
              <div className="product-image-placeholder">IMG</div>
            </div>

            <div className="price-buy-section">
              <div className="price-circle">$1</div>
              <button className="buy-button">BUY</button>
            </div>

            <div className="quantity-selector">
              <div className="quantity-box">
                <div className="quantity-label">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </svg>
                  <p>Choose the quantity</p>
                </div>

                <div className="quantity-controls-horizontal">
                  <button
                    className="quantity-button"
                    onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div className="quantity-number">{quantity}</div>

                  <button
                    className="quantity-button"
                    onClick={() => setQuantity(prev => Math.min(prev + 1, 10))}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>

            <div className="product-description">
              <h3>DESCRIPTION</h3>
              <p>Queso Duro is characterized by its compact and firm texture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
