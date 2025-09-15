import React from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Agregando ${quantity} unidades de ${product.title} al carrito`);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-content">
        <div className="item-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="item-detail-info">
          <h1 className="item-detail-title">{product.title}</h1>
          <p className="item-detail-price">${product.price}</p>
          <p className="item-detail-description">{product.description}</p>
          <p className="item-detail-stock">
            Stock disponible: {product.stock} unidades
          </p>
          <ItemCount 
            stock={product.stock} 
            initial={1} 
            onAdd={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
