import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Importante
import './grocery.css';

export default function GroceryApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductIndex, setActiveProductIndex] = useState(1);
  const navigate = useNavigate(); // 👈 Hook de navegación

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("Searching for:", searchQuery);
    alert(`Searching for: ${searchQuery}`);
  };

  const categories = [
    { name: 'Dairy', image: '/public/img/Diary.png' },
    { name: 'Meat and Chicken', image: '/public/img/meatandcheaken.png' },
    { name: 'Vegetables', image: '/public/img/vegetables.png' },
    { name: 'Fruits', image: '/public/img/fruits.png' },
  ];

  return (
    <div className="grocery-frame">
      <div className="grocery-app">
        <div className="search-header">
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
                <img src="/public/img/guisquil.png" alt="Güisquil" />
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
                <div
                  key={index}
                  className="category-card"
                  onClick={() => {
                    if (category.name === 'Dairy') {
                      navigate('/dairy-products'); // 👈 Navega a Dairy
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="black"/>
            </svg>
          </button>
          <button className="nav-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="black"/>
            </svg>
          </button>
          <button className="nav-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="black" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
