import React from 'react'
import { render } from 'react-dom'
import './styles.scss'
import data from './data.json'

// Create JSX element and log it.
const myEl = <div>Hey Wow!</div>
console.log('myEl: ', myEl)

// Create root element to render other elements into, add root element to DOM.
const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

// Render the myEl JSX element into the root element with React.
render(myEl, rootElement)

function loadData () {
  const itemsData = data.items
  const items = itemsData.map(
    ({ id, name, description, createdAt, updatedAt }) => (
      <li key={id}>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>description: {description}</p>
        <p>created: {createdAt}</p>
        <p>updated: {updatedAt}</p>
      </li>
    )
  )
  return <ul>{items}</ul>
}

const productList = loadData()

render(productList, rootElement)
