import { useState } from 'react';
import { Heart, Home, ShoppingCart } from 'lucide-react';

export default function DairyProductsGrid() {
  const [favorites, setFavorites] = useState({});
  
  const products = [
    { id: 1, name: 'Queso Duro', image: '/api/placeholder/100/100', count: 5 },
    { id: 2, name: 'Queso Cané', image: '/api/placeholder/100/100', count: 6 },
    { id: 3, name: 'Queso Fresco', image: '/api/placeholder/100/100', count: 4 },
    { id: 4, name: 'Queso con chile', image: '/api/placeholder/100/100', count: 9 },
    { id: 5, name: 'Crema', image: '/api/placeholder/100/100', count: 8 },
    { id: 6, name: 'Leche', image: '/api/placeholder/100/100', count: 3 },
    { id: 7, name: 'Quesillo', image: '/api/placeholder/100/100', count: 7 },
    { id: 8, name: 'Requesón', image: '/api/placeholder/100/100', count: 1 },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <Home size={24} />
        <div className="relative">
          <ShoppingCart size={24} />
        </div>
      </header>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="relative">
            <button 
              className="bg-white rounded-lg p-2 w-full shadow-md flex flex-col items-center relative"
              // Preparado para añadir react-router-dom más tarde
              onClick={() => console.log(`Navigate to product ${product.id}`)}
            >
              <div className="absolute top-2 right-2 z-10">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(product.id);
                  }}
                  className="bg-white rounded-full p-1"
                >
                  <Heart 
                    size={20} 
                    fill={favorites[product.id] ? "red" : "none"} 
                    color={favorites[product.id] ? "red" : "black"} 
                  />
                </button>
              </div>
              
              <div className="w-20 h-20 mb-2">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-sm font-medium text-center">{product.name}</p>
              
              <div className="absolute bottom-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {product.count}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}