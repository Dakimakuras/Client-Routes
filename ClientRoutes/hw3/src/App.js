import React, { Component } from 'react';
import './App.css';
import  { Provider} from 'react-redux';
import createStore from './';
import Dogs from './Dogs';
import FruitPosts from './components/FruitPosts';
import Fruitform from './components/Fruitform';
import CoffeePosts from './components/CoffeePosts';
import CoffeePostform from './components/CoffeePostform';

class App extends Component {


  render() {
    return (
      <div className="App">
        <FruitPosts/>
        <Fruitform/>
        <CoffeePosts />
        <CoffeePostform />
        <header className="App-header">
            <Dogs />
        </header>
      </div>
    );
  }
}

export default App;
