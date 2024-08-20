import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Cart from './components/cart/Cart';
import GameList from './components/game-list/GameList';
import GameDetail from './components/game-detail/GameDetail';
import { getGames } from './services/apiService';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [games, setGames] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const fetchGames = async () => {
      const gamesData = await getGames();
      setGames(gamesData);
    };

    fetchGames();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (game) => {
    const existingGameIndex = cart.findIndex(item => item.dealID === game.dealID);
  
    const gameDetails = {
      dealID: game.dealID, 
      name: game.title,
      price: game.salePrice,
      imageUrl: game.thumb,
      quantity: 1,
    };
  
    if (existingGameIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === existingGameIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, gameDetails];
      setCart(updatedCart);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<GameList addToCart={addToCart} games={games} />} />
            <Route path="/game/:id" element={<GameDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}   
export default App;
