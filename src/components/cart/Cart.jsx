import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleRemove = (dealID) => {
    dispatch(removeFromCart({ dealID }));
  };

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
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
      )}
    </div>
  );
};

export default Cart;
