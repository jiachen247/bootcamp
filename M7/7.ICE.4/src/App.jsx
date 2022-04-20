import React, { useState } from 'react'

const UNDERSCORE = '_'

const formatLetters = (letters) => letters.map(letter => <span class="letter">{letter}</span>)

function AnswerDisplay({guessedLetters}) {
  return <div className='letters'>{formatLetters(guessedLetters)}</div>;
}

function GameInput({handleChange}) {
  return <input value='' onChange={handleChange}></input>
}

function ErrorDisplay({errors}) {
  return (
    <>
      <p>Mistakes:</p>
      <p>{formatLetters(errors)}</p>
    </>
  );
}

export default function App () {
  const secretWord = ['b', 'a', 'n', 'a', 'n', 'a']

  // the array begins with only _
  const [guessedLetters, setGuessedLetters] = useState([
    UNDERSCORE,
    UNDERSCORE,
    UNDERSCORE,
    UNDERSCORE,
    UNDERSCORE,
    UNDERSCORE
  ])

  const [errors, setErrors] = useState([])

  const wrongGuessChars = ['(', '凸', 'ಠ', '益', 'ಠ', ')', '凸']

  const handleChange = event => {
    const letter = event.target.value
    const currIndex = guessedLetters.indexOf(UNDERSCORE)
    if (secretWord[currIndex] == letter) {
      // match
      const newGuessedLetters = [...guessedLetters] 
      newGuessedLetters[currIndex] = letter 
      setGuessedLetters(newGuessedLetters)
    } else {
      // increase error count
      const newErrors = [...errors]
      newErrors.push(wrongGuessChars[errors.length])
      setErrors(newErrors)
    }
  }

  if (errors.length >= wrongGuessChars.length) {
    return <>YOU LOSE!</>
  } else if (!guessedLetters.includes(UNDERSCORE)) {
    return <>YOU WIN!</>
  }

  return (
    <>
      <h2>Guess the word!</h2>
      <AnswerDisplay guessedLetters={guessedLetters}/>
      <GameInput handleChange={handleChange}/>
      <ErrorDisplay errors={errors}/> 
    </>
  )
}
