// src/Principal.jsx
import guisquil from './assets/guisquil.png';
import meat from './assets/meat.png';
import vegetables from './assets/vegetables.png';
import fruits from './assets/fruits.png';

const Principal = () => {
  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <i className="fa fa-search"></i>
      </div>

      <div className="welcome">
        <h2>Hello, <b>User</b></h2>
        <p>Choose your products</p>
      </div>

      <div className="featured-product">
        <img src={guisquil} alt="Güisquil" />
        <h3>Güisquil</h3>
        <p>$0.50 ctvs</p>
        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="categories">
        <h3>Categories</h3>
        <div className="category-grid">
          <div className="category-card">
            <img src={dairy} alt="Dairy" />
            <p>Dairy</p>
          </div>
          <div className="category-card">
            <img src={meat} alt="Meat and Chicken" />
            <p>Meat and Chicken</p>
          </div>
          <div className="category-card">
            <img src={vegetables} alt="Vegetables" />
            <p>Vegetables</p>
          </div>
          <div className="category-card">
            <img src={fruits} alt="Fruits" />
            <p>Fruits</p>
          </div>
        </div>
      </div>

      <div className="bottom-nav">
        <button>🏠</button>
        <button>🔍</button>
        <button>👤</button>
      </div>
    </div>
  );
};

export default Principal;
