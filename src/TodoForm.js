import React from 'react'
import shortid from 'shortid'

class TodoForm extends React.Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    })
    this.setState({
      text: ''
    })
  }

  render() {
    return  (
      <form onSubmit={this.handleSubmit} className="todo__form">
        <input
          name="text"
          placeholder="todo..."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add todo</button>
      </form>
    )
  }
}

export default TodoForm
