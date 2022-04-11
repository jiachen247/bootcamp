import React from 'react'
import pokemon from '../react-pokedex.json'
import Pokemon from './Pokemon'

function App () {
  const pokeData = getPokeData()
  const pokemons = pokeData.map(pokemon => <Pokemon pokemonData={pokemon} />)
  return <div>{pokemons}</div>
}

function getPokeData () {
  const pokeData = pokemon.pokedex.slice(0, 20)
  const modifiedPokeData = pokeData.map(currPokemon => ({
    name: currPokemon['names']['en'],
    types: currPokemon['types'],
    catchRate: currPokemon['catch_rate'],
    height: currPokemon['height_eu'],
    weight: currPokemon['weight_eu'],
    color: currPokemon['color']
  }))
  return modifiedPokeData
}

export default App
