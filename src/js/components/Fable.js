import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Albums from './Albums';
import Footer from './Footer';
import Modal from './Modal';

class Fable extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <main id="main" className="main">
        <Header />
        <Hero />
        <Albums />
        <Footer />
        <Modal />
      </main>
    );
  }
}

export default Fable;