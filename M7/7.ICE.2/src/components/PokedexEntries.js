import React from 'react'

function PokedexEntries  ({ pokedexEntries }) {
  console.log(pokedexEntries)
  const entries = Object.keys(pokedexEntries).map(key => {
    const entry = pokedexEntries[key]["en"]
    return <li>{key}: {entry}</li>
  })
  return (
    <div>
      <b>Pokedex Entries:</b>
      <ul>{entries}</ul>
    </div>
  )
}

export default PokedexEntries
