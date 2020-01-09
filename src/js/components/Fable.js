import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Albums from './Albums';
import Footer from './Footer';
import Modal from './Modal';
import albums from '../data/albums-json.json';

class Fable extends React.Component {
  constructor() {
    super();
    this.state = { 
      currentAlbum: null,
      fade: true,
      showModal: false,
    };
  }

  setCurrentAlbum = (currentAlbum) => {
    console.log(currentAlbum);
    setTimeout(() => {
      this.setState({
        fade: false
      });
    }, 100);
    this.setState({
      currentAlbum: currentAlbum,
      showModal: true
    });
    document.body.style.overflow = 'hidden';
  }

  close = () => {
    setTimeout(() => {
      this.setState({
        showModal: false
      });
      document.body.style = '';
    }, 500);
    this.setState({
      fade: true
    });
  }

  render() {
    return (
      <main id="main" className="main">
        <div className="container">
          <Header />
          <Hero />
          <Albums
            albums={albums}
            setCurrentAlbum={this.setCurrentAlbum}
          />
        </div>
        <Footer />
        {(this.state.showModal) ?
        <Modal
          album={this.state.currentAlbum}
          close={this.close}
          fade={this.state.fade}
          show={this.state.showModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        /> 
        : null
        }
      </main>
    );
  }
}

export default Fable;