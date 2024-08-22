import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (dealID) => {
    dispatch(removeFromCart({ dealID }));
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <div className="cart-summary mb-4">
            <h5>Total Items: {totalItems}</h5>
            <h5>Total Price: ${totalPrice}</h5>
            <Button variant="success" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
          <div className="row">
            {cart.map((game) => (
              <div key={game.dealID} className="col-md-4">
                <Card className="mb-4">
                  <Card.Img variant="top" className="img-fluid card-img-custom" src={game.imageUrl} style={{ objectFit: 'scale-down', height: '300px' }} />
                  <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    <Card.Text>Price: {game.price}</Card.Text>
                    <Card.Text>Quantity: {game.quantity}</Card.Text>
                    <Button variant="danger" onClick={() => handleRemove(game.dealID)}>Remove</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
