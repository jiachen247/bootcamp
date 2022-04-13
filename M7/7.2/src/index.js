import React from 'react';
import { render } from 'react-dom';
// Use object decomposition to extract the warning prop from the props param.
function BigText({ warning }) {
  return (
    <h1 className="hero-text">
      {/* Render the warning prop. CSS class name "warning" is unrelated. */}
      Hey <span className="warning">{warning}</span>
    </h1>
  );
}

function TestMyNumber(props) {
  const enteredNumber = props.number;
  const element = (
    <div>
      <p>{enteredNumber}</p>
      {enteredNumber > 5 && <p>Wow! Big numbers!</p>}
    </div>
  );

  return element;
}

function BigAnnouncement() {
  const myEl = (
    <div>
      {/* Pass warning prop to BigText */}
      <BigText warning="watch out!" />
      <p>Lorem Ipsum!!</p>
    </div>
  );
  console.log('myEl:', myEl);
  return myEl;
}

// Create root element to render React elements into
const rootElement = document.createElement('div');
// Append root element to document
document.body.appendChild(rootElement);
// Have React render the JSX element into the root element
render(<BigAnnouncement />, rootElement);