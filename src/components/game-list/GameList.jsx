import React from 'react';
import { Link } from 'react-router-dom';

const GameList = ({games, addToCart}) => {
  if (!games || games.length === 0) {
    return <div>No games available</div>
  }
}

const GameList = ({ games }) => {
  return (
    <div className="row">
      {games.map(game => (
        <div key={game.id} className="col-md-3 mb-4">
          <div className="card h-100">
            <Link to={`/game/${game.id}`}>
            <img src={game.imageUrl} className="card-img-top" alt={game.name} style={{ objectFit: 'scale-down', height: '230px' }} />
            </Link>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">{game.name}</h5>
              <p className="card-text text-center text-muted">{game.price}</p>
              <Link to={`/game/${game.id}`} className="btn btn-primary mt-auto">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
