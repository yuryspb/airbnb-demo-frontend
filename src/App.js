import React, { Component } from 'react';
import './App.css';
import Header from './Header/';
import Explore from './Explore/';
import Experiences from './Experiences/';
import Homes from './Homes/';
import Popular from './Popular/';
import Destinations from './Destinations/';
import Footer from './Footer/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <main className="main">
            <Explore />
            <Experiences />
            <Homes />
            <Popular />
            <Destinations />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
