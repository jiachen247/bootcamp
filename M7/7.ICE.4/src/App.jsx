import React, { useState } from 'react'

export default function App () {
  const secretWord = ['b', 'a', 'n', 'a', 'n', 'a']

  // the array begins with only _
  const [guessedLetters, setGuessedLetters] = useState([
    '_',
    '_',
    '_',
    '_',
    '_',
    '_'
  ])

  const [errorDisplay, setErrorDisplay] = useState('')
  const [numErrors, setNumErrors] = useState(1)
  const [inputLetter, setInputLetter] = useState('')
  const [gameOver, setGameOver] = useState(false)

  const wrongGuessChars = {
    1: '(',
    2: '凸',
    3: 'ಠ',
    4: '益',
    5: 'ಠ',
    6: ')',
    7: '凸'
  }

  const handleChange = event => {
    const letter = event.target.value
    const currIndex = guessedLetters.indexOf('_')
    if (secretWord[currIndex] == letter) {
      // match
      var changedValue = false
      setGuessedLetters(
        guessedLetters.map(currLetter => {
          // change the left-most value only
          if (!changedValue && currLetter == '_') {
            changedValue = true
            return letter
          } else {
            return currLetter
          }
        })
      )
      if (currIndex == 5) {
        setGameOver(true)
      }
    } else {
      // increase error count
      setErrorDisplay(errorDisplay + wrongGuessChars[numErrors])
      setNumErrors(numErrors + 1)
      if (numErrors >= 8) {
        setGameOver(true)
      }
    }
    setInputLetter('')
  }

  const lettersToDisplay = guessedLetters.map(letter => <p>{letter}</p>)

  return (
    <div>
      <h2>Guess the word!</h2>
      <div className='letters'>{lettersToDisplay}</div>
      {!gameOver && <input value={inputLetter} onChange={handleChange}></input>}
      <p>Mistakes</p>
      <p>{errorDisplay}</p>
      {gameOver && numErrors < 8 && <p>You Won!</p>}
      {gameOver && numErrors >= 8 && <p>You Lost!</p>}
    </div>
  )
}
