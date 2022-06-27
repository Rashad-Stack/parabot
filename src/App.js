import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Shop from './components/Shop';
import Spired from './components/Spired';
import Review from './components/Review';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Services />
      <Showcase />
      <Shop />
      <Spired />
      <Review />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
