import React, { Component } from 'react';
import './App.css';
import TopNav from '././components/TopNav';
import Home from '././components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Home />
      </div>
    );
  }
}

export default App;
