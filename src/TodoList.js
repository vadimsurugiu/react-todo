import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

class TodoList extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [],
      todosToShow: 'all',
      activeId: "1"
    }
  }

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else {
          return todo
        }
      })
    })
  }

  updateTodoToShow = (s) => {
    this.setState({
      todosToShow: s
    })
  }

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    let todos = []

    if(this.state.todosToShow === 'all') {
      todos = this.state.todos
    } else if (this.state.todosToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete)
    } else if (this.state.todosToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete)
    }

    return (
      <div className="todo__container">
        <TodoForm onSubmit={this.addTodo}/>
        <div className="todos">
          {todos.map(todo => (
            <div className="todo__cont">
              <Todo
                key={todo.id}
                toggleComplete={() => this.toggleComplete(todo.id)}
                todo={todo}
                deleteTodo={() => this.handleDeleteTodo(todo.id)}
              />
            </div>
          ))}
        </div>
        <div>
          todos left: <b>{this.state.todos.filter(todo => !todo.complete).length}</b>
        </div>
        <div>
          <button activekey="1" className={this.state.activeId == this.props.activekey ? 'is-active' : ''} onClick={() => this.updateTodoToShow("all")}>all</button>
          <button activekey="2" className={this.state.activeId == this.props.activekey ? 'is-active' : ''} onClick={() => this.updateTodoToShow("active")}>active</button>
          <button activekey="3" className={this.state.activeId == this.props.activekey ? 'is-active' : ''} onClick={() => this.updateTodoToShow("complete")}>complete</button>
        </div>
      </div>
    )
  }
}

export default TodoList
