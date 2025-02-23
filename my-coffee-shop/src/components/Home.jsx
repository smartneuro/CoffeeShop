import React from 'react';
import coffeeImage1 from '../assets/coffee1.jpeg';
import coffeeImage2 from '../assets/coffee2.jpg';
import coffeeImage3 from '../assets/coffee3.jpg';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <img src={coffeeImage1} alt="Coffee" className="hero-image" />
        <div className="hero-content">
          <h1>Boutique Factory</h1>
          <h2>Chocolat de rêves</h2>
        </div>
      </div>

      <div className="image-gallery">
        <img src={coffeeImage2} alt="Coffee" />
        <img src={coffeeImage3} alt="Coffee" />
      </div>

      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        <p>"Amazing coffee and atmosphere!" - John Doe</p>
        <p>"Best cafe in town!" - Jane Smith</p>
      </div>

      <div className="social-media">
        <h3>Follow us!</h3>
        {/* ... Social media icons ... */}
      </div>
    </div>
  );
}

export default Home;