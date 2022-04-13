import React from 'react'
import PokeType from './PokeType'
import PokedexEntries from './PokedexEntries'

function Pokemon ({ pokemonData }) {
  return (
    <div style={{"border-style": "dotted", "margin": "10px"}}>
      <h3>{pokemonData.name}</h3>
      <PokeType types={pokemonData.types} />
      <p>Catch Rate: {pokemonData.catchRate}</p>
      <p>height: {pokemonData.height}</p>
      <p>weight: {pokemonData.weight}</p>
      <p>colour: {pokemonData.color} </p>
      <PokedexEntries pokedexEntries={pokemonData.pokedex}/>
    </div>
  )
}

export default Pokemon
