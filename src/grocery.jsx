import { useState } from 'react';
import { Search } from 'lucide-react';
import './GroceryApp.css';

export default function GroceryApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductIndex, setActiveProductIndex] = useState(1);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Searching for:", searchQuery);
    alert(`Searching for: ${searchQuery}`);
  };

  const categories = [
    { name: 'Dairy', image: '/api/placeholder/64/64' },
    { name: 'Meat and Chicken', image: '/api/placeholder/64/64' },
    { name: 'Vegetables', image: '/api/placeholder/64/64' },
    { name: 'Fruits', image: '/api/placeholder/64/64' },
  ];

  return (
    <div className="grocery-app">
      <div className="search-header">
        <button className="menu-button">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H19M1 7H19M1 13H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearchSubmit();
              }
            }}
          />
          <button 
            onClick={handleSearchSubmit} 
            className="search-button"
          >
            <Search size={16} />
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="welcome-text">
          <h1 className="greeting">Hello, User</h1>
          <p className="choose-products">Choose your products</p>
        </div>

        <div className="featured-product">
          <div className="product-card">
            <div className="product-image">
              <img src="/api/placeholder/50/50" alt="Güisquil" />
            </div>
            <div className="product-info">
              <h3 className="product-name">Güisquil</h3>
              <p className="product-price">$0.50 ctvs</p>
            </div>
          </div>
          <div className="product-slider">
            {[1, 2, 3].map((index) => (
              <button 
                key={index}
                className={`slider-dot ${activeProductIndex === index ? 'active' : ''}`}
                onClick={() => setActiveProductIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="categories">
          <h2 className="category-title">Categories</h2>
          <div className="category-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <p className="category-name">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="navbar">
        <button className="nav-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="black"/>
          </svg>
        </button>
        <button className="nav-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="black"/>
          </svg>
        </button>
        <button className="nav-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="black" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
