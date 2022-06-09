import React from 'react'

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo-header">
        <div className="add">
          <input
            type="text"
            placeholder="Add your plan"
            className="todo-input"
          />
          <div className="todo-add-btn">
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
