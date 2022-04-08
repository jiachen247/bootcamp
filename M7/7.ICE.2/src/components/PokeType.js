import React from 'react'
import bug from '../icons/bug.png'
import dark from '../icons/dark.png'
import dragon from '../icons/dragon.png'
import electric from '../icons/electric.png'
import fairy from '../icons/fairy.png'
import fighting from '../icons/fighting.png'
import fire from '../icons/fire.png'
import flying from '../icons/flying.png'
import ghost from '../icons/ghost.png'
import grass from '../icons/grass.png'
import ground from '../icons/ground.png'
import ice from '../icons/ice.png'
import normal from '../icons/normal.png'
import poison from '../icons/poison.png'
import psychic from '../icons/psychic.png'
import rock from '../icons/rock.png'
import steel from '../icons/steel.png'
import water from '../icons/water.png'

function PokeType ({ types }) {
  // images in react can also be handled the old HTML way, we try to this new method instead to learn about it!
  // read more pros and cons of each approach: https://daveceddia.com/react-image-tag/
  function imageRenderSwitch (param) {
    switch (param) {
      case 'Bug':
        return bug
      case 'Dark':
        return dark
      case 'Dragon':
        return dragon
      case 'Electic':
        return electric
      case 'Fairy':
        return fairy
      case 'Fighting':
        return fighting
      case 'Fire':
        return fire
      case 'Flying':
        return flying
      case 'Ghost':
        return ghost
      case 'Grass':
        return grass
      case 'Ground':
        return ground
      case 'Ice':
        return ice
      case 'Normal':
        return normal
      case 'Poison':
        return poison
      case 'Psychic':
        return psychic
      case 'Rock':
        return rock
      case 'Steel':
        return steel
      case 'Water':
        return water
    }
  }

  return (
    <div>
      {types.map(type => (
        <div>
          <img src={imageRenderSwitch(type)} />
          <p>{type} type</p>
        </div>
      ))}
    </div>
  )
}

export default PokeType
