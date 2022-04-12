import React from "react"
import { render } from "react-dom"
import "./styles.scss"
import data from "./data.json"

// Create root element to render other elements into, add root element to DOM.
const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

function getProduct({ id, name, description, createdAt, updatedAt }) {
  return (
    <li key={id}>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>description: {description}</p>
      <p>created: {createdAt}</p>
      <p>updated: {updatedAt}</p>
    </li>
  )
}

function getProducts() {
  const items = data.items.map(getProduct)
  return <ul>{items}</ul>
}

render(getProducts(), rootElement)
