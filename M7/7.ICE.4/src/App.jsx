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
      const newGuessedLetters = [...guessedLetters]
      newGuessedLetters[currIndex] = letter 
      setGuessedLetters(newGuessedLetters)
    } else {
      // increase error count
      setErrorDisplay(errorDisplay + wrongGuessChars[numErrors])
      setNumErrors(numErrors + 1)
    }
    setInputLetter('')
  }

  if (numErrors >= 8) {
    return <>YOU LOSE!</>
  } else if (!guessedLetters.includes('_')) {
    return <>YOU WIN!</>
  }

  const formatGuessedLetters = (letters) => letters.map(letter => <span class="letter">{letter}</span>)

  return (
    <>
      <h2>Guess the word!</h2>
      <div className='letters'>{formatGuessedLetters(guessedLetters)}</div>
      <input value={inputLetter} onChange={handleChange}></input>
      <p>Mistakes</p>
      <p>{errorDisplay}</p>
    </>
  )
}
