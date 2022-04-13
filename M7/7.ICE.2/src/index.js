import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)
