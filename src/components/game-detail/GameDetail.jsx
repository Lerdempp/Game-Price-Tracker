import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GameDetail.css';

const GameDetail = ({ addToCart }) => {
  const { id } = useParams(); 
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?id=${id}`);
        const gameDetails = await response.json();
        console.log("Game Details State:", gameDetails);
        setGame(gameDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!game) {
    return <div>Game not found</div>;
  }

  const handlePurchase = () => {
    addToCart(game);
  };

  if (!game.gameInfo) {
    return <div>Error: Game information is not available.</div>;
  }
  

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <div className="card mb-4">
        <img src={game.gameInfo.thumb} className="card-img-top" alt={game.gameInfo.name} style={{ objectFit: 'contain', height: '300px' }} />
        <div className="card-body text-center">
          <h5 className="card-title">{game.gameInfo.name}</h5>
          <p className="card-text">Sale Price: ${game.gameInfo.salePrice}</p>
          <p className="card-text">Retail Price: ${game.gameInfo.retailPrice}</p>
          <button className="btn btn-success" onClick={handlePurchase}>Buy</button>
        </div>
      </div>
      <div className="w-100">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card p-3 text-center">
              <h5>Metacritic Score</h5>
              <p>{game.gameInfo.metacriticScore || "N/A"}</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-3 text-center">
              <h5>Steam Rating</h5>
              <p>{game.gameInfo.steamRatingPercent || "N/A"}</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-3 text-center">
              <h5>Total Ratings</h5>
              <p>{game.gameInfo.steamRatingPercent || "N/A"}%</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-3 text-center">
              <h5>Steam Works</h5>
              <p>{game.gameInfo.steamworks || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
