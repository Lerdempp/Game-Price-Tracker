import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cart }) => {
  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((game, index) => (
            <div key={index} className="col-md-4">
              <Card className="mb-4">
                <Card.Img variant="top" className="img-fluid card-img-custom" src={game.imageUrl} style={{ objectFit: 'scale-down', height: '300px' }} />
                <Card.Body>
                  <Card.Title>{game.name}</Card.Title>
                  <Card.Text>Price: {game.price}</Card.Text>
                  <Button variant="danger">Remove</Button>
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
