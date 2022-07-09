import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    axios.get('http://localhost:8080/health')
      .then(res => this.setState({ message: res.data.name }))
  }

  render() {
    return (
      <div
        className='button_container'
        onClick={this.handleClick}>
        <button className='button'>Click me</button>
      </div>
    )
  }
}
export default App