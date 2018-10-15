import React from 'react'

class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem () {
    this.props.deleteItem(this.props.index)
  }
  render () {
    return (
        <li 
          onClick={this.deleteItem}
          dangerouslySetInnerHTML= {{__html: this.props.item}}
        ></li>
    )
  }
}

export default TodoItem