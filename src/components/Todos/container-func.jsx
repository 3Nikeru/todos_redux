import React, { useState } from 'react';

import TodosComponent from "./component";
import { connect } from 'react-redux';
import { addTodo, removeTodo, checkTodo } from '../../store/todos/actions';

import './styles.scss';

const Todos = ({todos, addTodo, removeTodo, checkTodo}) => {
  const [enterTodo, setEnterTodo] = useState('');
  // const [todos, setTodos] = useState([]);

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
    addTodo(newTodo);
  }

  const handleRemoveTodo = todoId => {
    removeTodo(todoId);
  }

  const handleCheckTodo = (checkid) => {
      checkTodo(checkid);
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


const mapStateToProps = state =>({
  todos: state.todos
})
const mapDispatchToProps = {
  addTodo,
  removeTodo,
  checkTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);