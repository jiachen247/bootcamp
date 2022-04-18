import React, { useState } from 'react';

// The setCelsiusTemp setter function sets the value of celsiusTemp
// in the parent App component.
function TempForm({ setCelsiusTemp }) {
  // TempForm stores its own local state to control the value in its
  // input field.
  const [tempInputValue, setTempInputValue] = useState('');

  // Update input field value and App component state on valid input.
  const handleChange = (event) => {
    const newTempInputValue = event.target.value;
    // If input is a number or empty string, update the value in the
    // input field and set the celsiusTemp state in the parent App component.
    if (newTempInputValue === '' || Number(newTempInputValue)) {
      setTempInputValue(newTempInputValue);
      // Convert newTempInputValue from string to number.
      setCelsiusTemp(Number(newTempInputValue));
    }
  };

  // Render a controlled input whose value is controlled by handleChange.
  return <input value={tempInputValue} onChange={handleChange} />;
}

// The celciusTemp prop comes from the App component.
function Fahrenheit({ celsiusTemp }) {
  const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  // Render the app's celsiusTemp value and its corresponding Fahrenheit value.
  return (
    <p>
      {celsiusTemp}
      {' '}
      in Fahrenheit is:
      {' '}
      {fahrenheitTemp}
    </p>
  );
}

export default function App() {
  // celsiusTemp and its setter function setCelsiusTemp must be stored
  // in the parent App component to pass data between its child components.
  const [celsiusTemp, setCelsiusTemp] = useState(0);
  return (
    <div>
      <TempForm setCelsiusTemp={setCelsiusTemp} />
      <Fahrenheit celsiusTemp={celsiusTemp} />
    </div>
  );
}
