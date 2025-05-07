import { useState } from 'react';
import { Heart, Home, ShoppingCart } from 'lucide-react';
import './DairyProductsGrid.css';

export default function DairyProductsGrid() {
  const [favorites, setFavorites] = useState({});

  const products = [
    { id: 1, name: 'Queso Duro', image: '/api/placeholder/100/100', count: 1 },
    { id: 2, name: 'Queso Cané', image: '/api/placeholder/100/100', count: 1 },
    { id: 3, name: 'Queso Fresco', image: '/api/placeholder/100/100', count: 1 },
    { id: 4, name: 'Queso con chile', image: '/api/placeholder/100/100', count: 1 },
    { id: 5, name: 'Crema', image: '/api/placeholder/100/100', count: 1 },
    { id: 6, name: 'Leche', image: '/api/placeholder/100/100', count: 1 },
    { id: 7, name: 'Quesillo', image: '/api/placeholder/100/100', count: 1 },
    { id: 8, name: 'Requesón', image: '/api/placeholder/100/100', count: 1 },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="phone-frame">
      <div className="dairy-container">
        <header className="dairy-header">
          <Home size={24} />
          <div className="dairy-cart">
            <ShoppingCart size={24} />
          </div>
        </header>

        <div className="dairy-grid">
          {products.map((product) => (
            <div key={product.id} className="dairy-card-wrapper">
              <button
                className="dairy-card"
                onClick={() => console.log(`Navigate to product ${product.id}`)}
              >
                <div className="dairy-favorite">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className="favorite-button"
                  >
                    <Heart
                      size={20}
                      fill={favorites[product.id] ? "red" : "none"}
                      color={favorites[product.id] ? "red" : "black"}
                    />
                  </button>
                </div>

                <div className="dairy-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="dairy-image"
                  />
                </div>

                <p className="dairy-name">{product.name}</p>

                <div className="dairy-count">
                  ${product.count}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
