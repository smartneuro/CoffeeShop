import React, { useState } from 'react';

function Menu() {
  const [filter, setFilter] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const menuItems = [
    { name: 'Cappuccino', category: 'coffee', price: '$5' },
    { name: 'Latte', category: 'coffee', price: '$4' },
    { name: 'Espresso', category: 'coffee', price: '$3' },
    { name: 'Croissant', category: 'pastry', price: '$3' },
    { name: 'Muffin', category: 'pastry', price: '$2' },
    // ... more menu items
  ];

  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

  const handleFavorite = (itemName) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(itemName)) {
        return prevFavorites.filter(item => item !== itemName);
      } else {
        return [...prevFavorites, itemName];
      }
    });
  };

  return (
    <div className="menu">
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('coffee')}>Coffee</button>
        <button onClick={() => setFilter('pastry')}>Pastry</button>
      </div>
      <div className="menu-items">
        {filteredItems.map(item => (
          <div key={item.name} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => handleFavorite(item.name)}>
              {favorites.includes(item.name) ? 'Remove Favorite' : 'Add Favorite'}
            </button>
          </div>
        ))}
      </div>
      <div className="cafe-details">
        <h3>Visit Us</h3>
        <p>123 Main Street, Anytown</p>
        <p>Call us: (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Menu;