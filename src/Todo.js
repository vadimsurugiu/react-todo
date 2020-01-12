import React from 'react'

function Todo(props) {
  return (
    <div className="todo">
      <div
        className={props.todo.complete ? "todo__complete" : ""}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>
      <button onClick={props.deleteTodo}>x</button>
    </div>
  )
}

export default Todo
