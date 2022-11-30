import React, { useState } from 'react';

import TodosComponent from "./component";

import './styles.scss';

const Todos = () => {
  const [enterTodo, setEnterTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleEnterTodo = e => {
    setEnterTodo(e.target.value);
  }

  const handleAddTodo = () => {
   const newTodo = {
      id: Math.round(Math.random() * 100),
      value: enterTodo,
      checked: false,
    }

    setEnterTodo('');
    setTodos([...todos, newTodo]);
  }

  const handleRemoveTodo = todoId => {
    const updatedTodos = todos.filter(todo => todoId !== todo.id);

    setTodos(updatedTodos);
  }

  const handleCheckTodo = (checkid) => {
      const checkChecked = todos.map(todo => {
      if(checkid === todo.id){
        return {...todo, checked: !todo.checked}
      }
      return todo;
      })
        setTodos(checkChecked);
    }

  const isTodosEmpty = todos.length === 0;

  return (
    <TodosComponent
      enterTodo={enterTodo}
      todos={todos}
      isTodosEmpty={isTodosEmpty}
      onEnterTodo={handleEnterTodo}
      onAddTodo={handleAddTodo}
      onRemoveTodo={handleRemoveTodo}
      onCheckTodo={handleCheckTodo}
    />
  )
}

export default Todos;