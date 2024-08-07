import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Cart from './components/cart/Cart';
import GameList from './components/game-list/GameList';
import GameDetail from './components/game-detail/GameDetail';
import { getGames } from './services/apiService';
import './components/styles/App.css';
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
    }
    fetchGames()
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (game) => {
    const existingGameIndex = cart.findIndex(item => item.id === game.id);

    if (existingGameIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === existingGameIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...game, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<GameList games={games} />} />
            <Route path="/game/:id" element={<GameDetail games={games} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;