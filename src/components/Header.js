
import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <div className="navbar">
      <h1>Sai Karthik's Portfolio</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Header;