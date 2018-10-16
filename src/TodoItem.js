import React from 'react'
import PropType from 'prop-types'
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
          dangerouslySetInnerHTML= {{__html:  this.props.test + '-' + this.props.item}}
        ></li>
    )
  }
}

TodoItem.propsType = {
  item: PropType.string,
  deleteItem: PropType.func,
  test: PropType.string.isRequired
}

TodoItem.defaultProps = {
  test: 'hello world'
}
export default TodoItem