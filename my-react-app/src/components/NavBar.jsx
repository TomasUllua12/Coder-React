import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/" className="navbar-logo">
          <h1>Tomas's Store</h1>
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/smartphones" className={({ isActive }) => isActive ? 'active' : ''}>
            Smartphones
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/laptops" className={({ isActive }) => isActive ? 'active' : ''}>
            Laptops
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/tablets" className={({ isActive }) => isActive ? 'active' : ''}>
            Tablets
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
