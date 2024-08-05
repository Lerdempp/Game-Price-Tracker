import React from 'react';
import "./GameDetail.css";
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GameDetail = ({ games, addToCart }) => {
  const { id } = useParams();
  const game = games.find(g => g.id === parseInt(id));

  if (!game) {
    return <div>Game not found</div>;
  }

  const data = {
    labels: Object.keys(game.monthlyPrices),
    datasets: [
      {
        label: 'Price in USD',
        data: Object.values(game.monthlyPrices).map(price => parseFloat(price.replace('$', ''))),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const handlePurchase = () => {
    addToCart(game);
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <div className="card mb-4">
        <img src={game.imageUrl} className="card-img-top" alt={game.name} style={{ objectFit: 'scale-down', height: '300px' }} />
        <div className="card-body text-center">
          <h5 className="card-title">{game.name}</h5>
          <p className="card-text">{game.price}</p>
          <button className="btn btn-success" onClick={handlePurchase}>Buy</button>
        </div>
      </div>
      <div className="w-100">
        <h3 className="text-center mb-4">Game Stats</h3>
        <div className="card p-3 mb-4" style={{ width: '750px', height: '400px', margin: '0 auto' }}>
          <Line data={data} options={options} />
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card p-3 text-center">
              <h5>0.5 Hours</h5>
              <p>Average Playing Time</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-3 text-center">
              <h5>50 %</h5>
              <p>Percentage of Completion</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-3 text-center">
              <h5>350,000</h5>
              <p>Total Player</p>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-3 text-center">
              <h5>5000</h5>
              <p>Total Active Player</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
