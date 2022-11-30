import React from "react";

import './styles.scss';

const Item = ({ id, value, onRemoveTodo, onCheckTodo, checked }) => (
  <li className="item">
    <div 
    className={checked ? 'value check_active' : 'value'}
    >
      <input
        className='check'
        type="checkbox"
        onClick={() => onCheckTodo(id)}
      />
      {value}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

export default Item;
