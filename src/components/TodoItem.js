import React from "react"

class TodoItem extends React.Component {
  render() {
    return (
        <li>
          {this.props.todo.title} 
          <input
  type="checkbox"
  checked={this.props.todo.completed}
  onChange={() => this.props.handleChangeProps(this.props.todo.id)}
/>
        </li>
      )
  }
}

export default TodoItem