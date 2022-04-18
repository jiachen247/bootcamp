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
  const [errors, setErrors] = useState([])
  const [inputLetter, setInputLetter] = useState('')

  const wrongGuessChars = ['(', '凸', 'ಠ', '益', 'ಠ', ')', '凸']

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
      const newErrors = [...errors]
      newErrors.append(wrongGuessChars[errors.length])
      setErrors(newErrors)
    }
    setInputLetter('')
  }

  if (errors.length >= wrongGuessChars.length) {
    return <>YOU LOSE!</>
  } else if (!guessedLetters.includes('_')) {
    return <>YOU WIN!</>
  }

  const formatLetters = (letters) => letters.map(letter => <span class="letter">{letter}</span>)

  return (
    <>
      <h2>Guess the word!</h2>
      <div className='letters'>{formatLetters(guessedLetters)}</div>
      <input value={inputLetter} onChange={handleChange}></input>
      <p>Mistakes</p>
      <p>{formatLetters(errors)}</p>
    </>
  )
}
