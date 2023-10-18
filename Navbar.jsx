import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">DirectMovies</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Bollywood">Bollywood</Link></li>
          <li><Link to="/Anime">Anime</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
