import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.length === 0 ? (
        <p>No hay productos disponibles en esta categoría.</p>
      ) : (
        products.map(product => (
          <Item key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ItemList;
