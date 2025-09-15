import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.title} className="item-image" />
      <div className="item-info">
        <h3 className="item-title">{product.title}</h3>
        <p className="item-price">${product.price}</p>
        <p className="item-description">{product.description}</p>
        <Link to={`/item/${product.id}`} className="item-link">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
