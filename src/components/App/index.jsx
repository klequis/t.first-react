import React, { Component } from 'react';
import './style.css';
import Header from './Header'
import Person from './Person'
import Cars from './Cars'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Person
          name="Joe"
          city="Dublin"
        />
        <Person
          name="Alice"
          city="Livermore"
        />
        <Cars />
      </div>
    );
  }
}

export default App;
