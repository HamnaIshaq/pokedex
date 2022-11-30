import React, { Component } from 'react';
import Button from '../components/style-components/Button';
import {Circle, YellowCircle, RedCircle, BlueLargeCircle, YellowLargeCircle} from '../components/style-components/Circle';
import {Cylinder} from '../components/style-components/Cylinder';

class App extends Component {
  render() {
    return(
      <>
        <Circle/>
        <YellowCircle/>
        <RedCircle/>
        <BlueLargeCircle/>
        <YellowLargeCircle/>
        <Cylinder/>
        <Button>Button</Button>
      </>
    );
  }
}

export default App;
