import React, { Component } from 'react';
import Logo from './Components/Logo';


import './semantic/dist/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
      </div>
    );
  }
}

export default App;
