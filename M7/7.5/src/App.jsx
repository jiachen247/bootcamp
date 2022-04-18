import React, { useState } from 'react';

function Form() {
  // Control the form input value using a state variable name.
  const [name, setName] = useState("");

  const handleChange = (event) => {
    // Retrieve input field value from JS event object.
    const inputName = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputName);
    // Set the value stored in component state to be the new value.
    setName(inputName);
  };

  // The value of the input field always matches the value in the state
  // variable name. When the input value changes, handleChange updates
  // the value in the state.
  return (
    <div>
      <input value={name} onChange={handleChange} />
      <div>Name: {name}</div>
    </div>
  );
}

function UppercaseForm() {
  const [name, setName] = useState("");

  // Convert all user input to uppercase such that it's not possible
  // for the user to input lowercase characters.
  const handleChange = (event) => {
    // Retrieve input field value from JS event object.
    const inputName = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputName);
    // Convert input name to upper case
    const uppercaseInputName = inputName.toUpperCase();
    // Set the value of the input field to the uppercase input name
    setName(uppercaseInputName);
  };

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <div>Name: {name}</div>
    </div>
  );
}

function ValidationForm() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    // Retrieve input field value from JS event object.
    const inputName = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputName);
    // Only update the input field's value if the input only contains letters.
    if (inputName.match(/^[a-zA-Z]+$/)) {
      setName(inputName);
    }
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <div>Name: {name}</div>
    </div>
  );
}

export default function App() {
  return <><Form /><UppercaseForm /><ValidationForm /></>;
}
