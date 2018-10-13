import React, { Component, Fragment} from 'react'
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit () {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  handleItemDelete (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
        list: list
    })
  }
  render () {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInput}></input>
          <button onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
        <ul>
            {
              this.state.list.map((item, index) => {
                return <li onClick={this.handleItemDelete.bind(this, index)} key={index}>{item}</li>
              })
            }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList