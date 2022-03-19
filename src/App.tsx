import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Text } from './components'

function App() {
  const ref = React.useRef<HTMLButtonElement | null>(null)

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
        <Text as="h2" color="orange">
          Hello, world!
        </Text>
        <Text as="p">Hello, world!</Text>
        <Text as="div">Hello, world!</Text>
        <Text as="a" href="/">
          Go home
        </Text>
        {/* this is prevented now
        <Text href="/">Span with href</Text> */}
        <Text as="p" ref={ref}>
          hello
        </Text>
      </header>
    </div>
  )
}

export default App
