import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Performances from '../Performances/Performances';
import AboutUs from '../AboutUs/AboutUs';
import Team from '../Team/Team';
import Shows from '../Shows/Shows';
import Prices from '../Prices/Prices';
import Comments from '../Comments/Comments';
import Footer from '../Footer/Footer';



function Home() {
  return (
    <div className="Home">
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

export default Home;
