import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (gameId) => {
    const existingGame = cart.find(item => item.id === gameId);

    if (existingGame.quantity === 1) {
      const updatedCart = cart.filter(item => item.id !== gameId);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map(item =>
        item.id === gameId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((game) => (
            <div key={game.id} className="col-md-4">
              <Card className="mb-4">
                <Card.Img variant="top" className="img-fluid card-img-custom" src={game.imageUrl} style={{ objectFit: 'scale-down', height: '300px' }} />
                <Card.Body>
                  <Card.Title>{game.name}</Card.Title>
                  <Card.Text>Price: {game.price}</Card.Text>
                  <Card.Text>Quantity: {game.quantity}</Card.Text>
                  <Button variant="danger" onClick={() => removeFromCart(game.id)}>Remove</Button>
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
