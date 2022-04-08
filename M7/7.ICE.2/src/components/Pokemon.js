import React from 'react'
import PokeType from './PokeType'

function Pokemon ({ pokemonData }) {
  return (
    <div>
      <h3>{pokemonData.name}</h3>
      <PokeType types={pokemonData.types} />
      <p>Catch Rate: {pokemonData.catchRate}</p>
      <p>height: {pokemonData.height}</p>
      <p>weight: {pokemonData.weight}</p>
      <p>colour: {pokemonData.color} </p>
    </div>
  )
}

export default Pokemon
