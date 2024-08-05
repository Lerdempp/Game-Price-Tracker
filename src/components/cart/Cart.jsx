import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((game, index) => (
            <li key={index} className="list-group-item">
              {game.name} - {game.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
