import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from './home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, World!</h1>
        </header>
        <p className="App-intro">
        This be my new website!
        </p>
        <Home />
      </div>
    )
  }
}

export default App

