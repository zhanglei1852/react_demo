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

    /* 16.3版本后ref 使用 */
    this.inputRef = React.createRef()

  }

  // React 生命周期
  /*
    1. init props and state
    2. componentWillMount  组件即将被挂载到页面时执行
    3. render
    4. componentDidMount 组件被挂载到页面的时候执行
    5. update 组件更新 （数据发生变化的时候）
       componentWillReciveProps 1组件从父组件接收到props时、2父组件的render函数执行  3.子组件不是第一次存在于父组件中 => 子组件的componentWillReciveProps将执行
    6. shouldComponentUpdate  组件被更新之前, 要求返回一个boolean
    7. 如果shouldComponentUpdate 返回false 组件不更新
    8. shouldComponentUpdate return true  componentWillUpdate 组件将被更新
    9. render
    10. componentDidUpdate 组件更新完成之后执行 、
    11. componentWillUnmount 组件卸载
  */

  componentWillMount () {

  }

  componentDidMount () {

  }



  handleInput (e) {
    console.log('------回调ref------')
    console.log(this.input)

    console.log('----React.createRef----')
    console.log(this.inputRef.current)
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
          <input ref={ this.inputRef } value={this.state.inputValue} onChange={this.handleInput}></input>
          {/*  ref 引用dom 采用回调 第一个元素为dom元素 */}
          <input ref={(input) => {
            this.input = input
          }} value={this.state.inputValue} onChange={this.handleInput}></input>
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