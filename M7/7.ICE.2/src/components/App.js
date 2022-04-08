import React from 'react'
import pokemon from '../react-pokedex.json'
import Pokemon from './Pokemon'

function App () {
  const pokeData = []
  for (var i = 0; i < 20; i++) {
    const currPokemon = pokemon.pokedex[i]
    const pokemonToAdd = {
      name: currPokemon['names']['en'],
      types: currPokemon['types'],
      catchRate: currPokemon['catch_rate'],
      height: currPokemon['height_eu'],
      weight: currPokemon['weight_eu'],
      color: currPokemon['color']
    }
    pokeData.push(pokemonToAdd)
  }
  return (
    <div>
      {pokeData.map(pokemon => (
        <Pokemon pokemonData={pokemon} />
      ))}
    </div>
  )
}

export default App
