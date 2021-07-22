import { Component } from 'react';
import Pokemons from './PokemonsObj';

class PokemonCardCreation extends Component {
  render() {
    return(
      Pokemons.map(({ id, name, type, averageWeight, image }) => (
        <div key={id} className="pokemonsCard">
            <div className="pokeInfo">
              <h1>{ name }</h1>
              <h2>{ type }</h2>
              <h3>{ `${averageWeight.value}${averageWeight.measurementUnit}` }</h3>
            </div>
            <img src={ image } alt={ name } />
        </div>
      ))
    )
  }
}



export default PokemonCardCreation;