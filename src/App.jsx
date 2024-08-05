import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './components/game-list/GameList.jsx';
import GameDetail from './components/game-detail/GameDetail.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer';
import './components/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const sampleGames = [
      { 
        id: 1, 
        name: 'GTA 5', 
        price: '$10', 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/tr/thumb/b/be/Grand_Theft_Auto_V_oyununun_kapa%C4%9F%C4%B1.jpg/800px-Grand_Theft_Auto_V_oyununun_kapa%C4%9F%C4%B1.jpg',
        monthlyPrices: { 
          'January': '$10', 
          'February': '$12', 
          'March': '$11',
       
        } 
      },
      { 
        id: 4,
         name: 'Red Dead Redemption 2', 
         price: '$40', 
         imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg' ,
        monthlyPrices: { 
          'January': '$10', 
          'February': '$12', 
          'March': '$11',
       
        } 
      },
      { 
        id: 5, 
        name: 'The Witcher 3', 
        price: '$25', 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg' ,
        monthlyPrices: { 
          'January': '$10', 
          'February': '$12', 
          'March': '$11',
       
        } 
      },
      { 
        id: 2, 
        name: 'GTA 4', 
        price: '$20', 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/tr/7/71/GTA_4.jpg',
        monthlyPrices: { 
          'January': '$20', 
          'February': '$22', 
          'March': '$21',
          
        }
      },
      { 
        id: 6, 
    name: 'Cyberpunk 2077', 
    price: '$35', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    monthlyPrices: { 
      'January': '$35', 
      'February': '$37', 
      'March': '$36'
    } 
  },
      { 
      id: 7, 
      name: 'Far Cry 5', 
      price: '$30', 
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1_OqEPnfTddDS_i4p5FBrv3YOiO5mkoqbyCkz_aJdGLZKMCagtbClkpehILFU1l8P1D-cIg',
      monthlyPrices: { 
       'January': '$30', 
       'February': '$32', 
       'March': '$31'
    } 
  },
      { 
        id: 3, 
        name: 'GTA VICE CITY', 
        price: '$30', 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Vice-city-cover.jpg',
        monthlyPrices: { 
          'January': '$30', 
          'February': '$32', 
          'March': '$31',
          
        }
      },
      { 
        id: 8, 
    name: 'Assassin’s Creed Valhalla', 
    price: '$45', 
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3TU14-X97X5wo1MBXugUxcaHkqzb5hbIXZVbArP1pX4wqXYUDvvzS7D-OG8mxJqH4e3U2A',
    monthlyPrices: { 
      'January': '$45', 
      'February': '$47', 
      'March': '$46'
    } 
      },
      { 
        id: 9, 
        name: 'Assassin’s Creed Origins', 
        price: '$30', 
        imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR10Qkiz_qPIp_JEHgb2Uq7WfkfxaXxk46SlG2jXLWMina8pkdAbLIvwLzz6t0MUtJd3afN',
        monthlyPrices: { 
          'January': '$25', 
          'February': '$30', 
          'March': '$20',
          
        }
      }
    ];
    setGames(sampleGames);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={(
              <>
                <h1 className="my-4"></h1>
                <GameList games={games} />
              </>
            )} />
            <Route path="/game/:id" element={<GameDetail games={games} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
