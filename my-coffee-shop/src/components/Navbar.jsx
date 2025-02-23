import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src={logo} alt="Coffee Shop Logo" /></Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/login">Log In</Link>
      </div>
    </nav>
  );
}

export default Navbar;