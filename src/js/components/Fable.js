import React from 'react';
import Header from './Header';
import Hero from './Hero';

class Fable extends React.Component {
  render() {
    return (
      <main id="main" className="main">
        <Header />
        <Hero />
      </main>
    );
  }
}

export default Fable;