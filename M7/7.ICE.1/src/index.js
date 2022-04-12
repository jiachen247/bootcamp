import React from "react"
import { render } from "react-dom"
import "./styles.scss"
import data from "./data.json"

// Create root element to render other elements into, add root element to DOM.
const rootElement = document.createElement("div")
document.body.appendChild(rootElement)

// Tekes in product json and returns product element
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

// Takes in a list of products and returns an unordered list of product elements
function getProducts(items) {
  const itemsElements = items.map((getProduct))
  return <ul>{itemsElements}</ul>
}

render(getProducts(data.items), rootElement)
