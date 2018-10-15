import React, { Component, Fragment} from 'react'
import TodoItem from './TodoItem'
class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleInput (e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    const inputValue = e.target.value
    this.setState(() => {
      return {
        inputValue:  inputValue
      }
    })
  }

  handleSubmit () {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue]
    // })
    this.setState(() => {
      return {
        list: [...this.state.list, this.state.inputValue]
      }
    })
  }

  handleItemDelete (index) {
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //     list: list
    // })
    this.setState((prevState) => {
      prevState.list.splice(index, 1)
      return {
        list: prevState.list
      }
    })
  }

  TodoListRender () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={index} 
          index={index} 
          deleteItem={ this.handleItemDelete } 
          item={item}>
        </TodoItem>
      )
    })
  }

  render () {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInput}></input>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
           this.TodoListRender()
          }
        </ul>
      </Fragment>
    )
  }
}

export default TodoList