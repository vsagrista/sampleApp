import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       <p>THIS IS THE HEADER</p> 
        </header>
        <List/>
      </div>
    );
  }
}

export default App;
