import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Text } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Text as="h1">Hello, world!</Text>
        <Text as="p">Hello, world!</Text>
        <Text as="div">Hello, world!</Text>
      </header>
    </div>
  )
}

export default App
