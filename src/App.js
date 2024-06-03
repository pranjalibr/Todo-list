import React, { useState, useEffect } from 'react'
import Heading from './component/Heading'
import Form from './component/Form'
import './App.css'
import TodoList from './component/TodoList'

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Heading />
        </div>
        <div>
          <task-input />
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
            
          </div>
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default App
