import React from 'react'
import PropType from 'prop-types'
class TodoItem extends React.Component {
  constructor (props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }
  /* 
    1 性能优化
      避免子组件的无用的render 调用
      @params nextProps 下个props
      @params nextState 下个状态

      不在jsx上bing（this）

      setState（（）=》｛｝） 异步 一次性修改
      减少虚拟dom比对
  */
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.item !== this.props.item) {
      return true
    } else {
      return false
    }
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