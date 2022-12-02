import React, { Component } from 'react';
import Button from '../components/style-components/Button';
import {GreenCircle, YellowCircle, RedCircle, BlueLargeCircle, YellowLargeCircle} from '../components/style-components/Circle';
import {Cylinder, SearchInput, ImageContainer, ContentContainer} from '../components/style-components/Cylinder';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="pokedex-container">
        <div className='pokedex-top-circles-container'>
          <BlueLargeCircle/>
          <div className='pokedex-top-circles'>
            <GreenCircle/>
            <YellowCircle/>
            <RedCircle/>
          </div>
        </div> 
        <ImageContainer style={{marginTop: '1em', position:'relative', paddingBottom: '.5em'}}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon image" style={{display: 'block', height: '80%', margin: '0 auto', transform: 'scale(1.35)'}}/>
          <div style={{position:'absolute',bottom:'0',left:'10px',display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
              <Cylinder style={{display: 'flex', alignItems: 'center', height:'15px', width:'70px'}}>
                <p style={{margin: '0 auto', padding: '0', fontSize: '.45rem', }}>GRASS</p>
              </Cylinder>
              <Cylinder style={{display: 'flex', alignItems: 'center', height:'15px', width:'70px'}}>
                <p style={{margin: '0 auto', padding: '0', fontSize: '.45rem', }}>POISON</p>
              </Cylinder>
            </div> 
        </ImageContainer>
        <ContentContainer>
          <p>
            A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON
            
          </p>
        </ContentContainer>
        
        <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px', margin: '1em 0'}}>
          <Cylinder style={{display: 'flex', alignItems: 'center'}}>
            <p style={{margin: '0 auto', padding: '0', fontSize: '.65rem', }}>HP: 10</p>
          </Cylinder>
          <Cylinder style={{display: 'flex', alignItems: 'center'}}>
            <p style={{margin: '0 auto', padding: '0', fontSize: '.65rem', }}>ATK: 10</p>
          </Cylinder>
        </div>

        <div>
          <YellowLargeCircle/>

        </div>

        
        <SearchInput style={{marginTop: '2em'}}/>
        
      </div>
    );
  }
}

export default App;
