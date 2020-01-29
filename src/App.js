import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Performances from './Components/Performances/Performances';
import AboutUs from './Components/AboutUs/AboutUs';
import Team from './Components/Team/Team';
import Shows from './Components/Shows/Shows';
import Prices from './Components/Prices/Prices';
import Comments from './Components/Comments/Comments';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Performances />
      <AboutUs />
      <Team />
      <Shows />
      <Prices />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
