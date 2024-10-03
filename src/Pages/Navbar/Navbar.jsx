// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./logo/hexagon.png" alt="App Logo" />
        <span>columbae</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#landing">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#developer">Developer</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
