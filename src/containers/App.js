import React, { Component } from 'react';
import {Button, ButtonArrowTop, ButtonArrowRight, ButtonArrowDown, ButtonArrowLeft, ButtonCenter} from '../components/style-components/Button';
import {GreenCircle, YellowCircle, RedCircle, BlueLargeCircle, YellowLargeCircle} from '../components/style-components/Circle';
import {Cylinder, SearchInput, ImageContainer, ContentContainer} from '../components/style-components/Cylinder';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: 'bulbasaur',
      pokemonData: {
        types: [{name: 'grass', name2: 'poison'}],
        spriteFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        hp: 45,
        atk: 49
      },
      pokemonDescription: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.'
    }
  }

  fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`)
    .then(response => {
      console.log(response); 
      return response.json();
    })
    .then(data => {
      console.log(data)
      this.setState({ pokemonData: {
          types: data.types,
          spriteFront: data.sprites.front_default,
          spriteBack: data.sprites.back_default,
          hp: data.stats[0].base_stat,
          atk: data.stats[1].base_stat
        }
      });
      console.log(this.state.pokemonData.types[0].type.name.toUpperCase())
    })
  }

  fetchPokemonDescription = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.state.pokemon}`)
    .then(response => { 
      return response.json();
    })
    .then(data => {
      console.log(data.flavor_text_entries[0].flavor_text)
      this.setState({ pokemonDescription: data.flavor_text_entries[0].flavor_text});
      console.log(this.state.pokemonDescription)
    })
  }

  componentDidMount() {
    this.fetchPokemon();
    this.fetchPokemonDescription();
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if(prevState.pokemon !== this.state.pokemon) {
      this.fetchPokemon();
      this.fetchPokemonDescription();
    }
    
  }

  onEnterSearchPokemon = (event) => {
    if(event.key === 'Enter') {
      console.log(event.target.value);
      this.setState({ pokemon: event.target.value });
    }
  }

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
          <img src={this.state.pokemonData.spriteFront} alt="pokemon" style={{display: 'block', height: '80%', margin: '0 auto', transform: 'scale(1.35)'}}/>
          <div style={{position:'absolute',bottom:'0',left:'10px',display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
              <Cylinder style={{display: 'flex', alignItems: 'center', height:'15px', width:'70px'}}>
                <p style={{margin: '0 auto', padding: '0', fontSize: '.45rem', }}> GRASS</p>
              </Cylinder>
              <Cylinder style={{display: 'flex', alignItems: 'center', height:'15px', width:'70px'}}>
                <p style={{margin: '0 auto', padding: '0', fontSize: '.45rem', }}>POISON</p>
              </Cylinder>
            </div> 
        </ImageContainer>
        <ContentContainer>
          <p>{this.state.pokemonDescription}</p>
        </ContentContainer>
        
        <div style={{display: 'flex', justifyContent: 'flex-end', gap: '10px', margin: '1em 0'}}>
          <Cylinder style={{display: 'flex', alignItems: 'center'}}>
            <p style={{margin: '0 auto', padding: '0', fontSize: '.65rem', }}>HP: {this.state.pokemonData.hp}</p>
          </Cylinder>
          <Cylinder style={{display: 'flex', alignItems: 'center'}}>
            <p style={{margin: '0 auto', padding: '0', fontSize: '.65rem', }}>ATK: {this.state.pokemonData.atk}</p>
          </Cylinder>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <YellowLargeCircle/>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Button>
              <ButtonArrowTop/>
            </Button>
            <div style={{display: 'flex'}}>
              <Button style={{width: '35px', height: '30px'}}>
                <ButtonArrowRight/>
              </Button>
              <ButtonCenter/>
              <Button style={{width: '35px', height: '30px'}}>
                <ButtonArrowLeft />
              </Button>
            </div>
            <Button>
              <ButtonArrowDown/>
            </Button>
          </div>
        </div>

        
        <SearchInput 
          onKeyDown = {this.onEnterSearchPokemon} 
        />
        
      </div>
    );
  }
}

export default App;
