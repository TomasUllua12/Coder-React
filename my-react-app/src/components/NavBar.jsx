import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>Tomas's Store</h1>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
