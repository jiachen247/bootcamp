import React, { useState } from 'react';

function Counter() {
  // Initialise count to 0
  const [count, setCount] = useState(0);

  // Callback function to update state
  const incrementCount = (event) => {
    console.log(`current value of count is: ${count}`);
    // Call the setCount hook function to manipulate the DOM
    setCount(count + 1);
  };

  console.log('Executing Counter component function');

  // Return JSX to render
  return (
    <div>
      <p>
        You clicked
        {' '}
        {count}
        {' '}
        times
      </p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default function App() {
  return <div><Counter /></div>;
}
