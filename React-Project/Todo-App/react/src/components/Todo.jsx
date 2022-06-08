import React, { useEffect, useRef, useState } from 'react'

let count = 0

const Todo = () => {
  const [todos, setTodos] = useState([])
  const todoItem = useRef('')

  const handelBTN = () => {
    setTodos([
      ...todos,
      { num: count++, text: todoItem.current.value, discription: '' },
    ])
    todoItem.current.value = ''
    console.log(todoItem.current.value)
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, 100)
  }, [todos])

  return (
    <div className="todo">
      <div className="todo-header">
        <div className="add">
          <input
            type="text"
            placeholder="Add your plan"
            className="todo-input"
            ref={todoItem}
          />
          <div className="todo-add-btn">
            <button onClick={handelBTN}>Add</button>
          </div>
        </div>
      </div>
      <div className="todo-list">
        <ul>
          {todos.map((item) => (
            <li key={item.num}>
              {item.text} <button>delete</button> <button>edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo
