import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <div className="cart-badge">3</div>
    </div>
  );
};

export default CartWidget;
