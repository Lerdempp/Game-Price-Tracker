import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';

const GameList = ({ games }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (game) => {
    dispatch(addToCart(game));
  };

  if (!games || games.length === 0) {
    return <div>No games available</div>;
  }

  return (
    <div className="row">
      {games.map((game) => (
        <div className="col-md-4 mb-4" key={game.dealID}>
          <div className="card">
            <img src={game.thumb} className="card-img-top" alt={game.title} style={{ objectFit: 'contain' }} />
            <div className="card-body">
              <h5 className="card-title">{game.title}</h5>
              <p className="card-text">Price: ${game.salePrice}</p>
              <Link to={`/game/${game.dealID}`} className="btn btn-primary">Details</Link>
              <button className="btn btn-success ml-2" onClick={() => handleAddToCart(game)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
