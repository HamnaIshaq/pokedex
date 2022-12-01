import React, { Component } from 'react';
import Button from '../components/style-components/Button';
import {GreenCircle, YellowCircle, RedCircle, BlueLargeCircle, YellowLargeCircle} from '../components/style-components/Circle';
import {Cylinder} from '../components/style-components/Cylinder';
import './App.css';

class App extends Component {
  render() {
    return(
      <div class="pokedex-container">
        <div className='pokedex-top-circles-container'>
          <BlueLargeCircle/>
          <div className='pokedex-top-circles'>
            <GreenCircle/>
            <YellowCircle/>
            <RedCircle/>
          </div>
        </div> 
        <YellowLargeCircle/>
        <Cylinder/>
        <Button>Button</Button>
      </div>
    );
  }
}

export default App;
