import React, { Component, Fragment } from 'react'
import './style.css'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass () {
    this.setState(() => ({
      show: !this.state.show
    }))
  }

  render() {
    return (
      <Fragment>
        <div className = {this.state.show ? 'show' : 'hide'}>
          hello world
        </div>
        <button onClick={ this.toggleClass }>toggleClass</button>
      </Fragment>
    );
  }
}

export default App;

