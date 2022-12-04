import React from "react";
import { connect } from 'react-redux';
import { removeTodo, checkTodo } from "../../../../store/todos/actions";

import './styles.scss';

const Item = ({ id, value, checkTodo, removeTodo, checked }) => (
  <li className="item">
    <div 
    className={checked ? 'value check_active' : 'value'}
    >
      <input
        className='check'
        type="checkbox"
        onClick={() => checkTodo(id)}
      />
      {value}
    </div>
    <button onClick={() => removeTodo(id)}>
      x
    </button>
  </li>
)

const mapStateToProps = state =>({
  todos: state.todos
})
const mapDispatchToProps = {
  removeTodo,
  checkTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
