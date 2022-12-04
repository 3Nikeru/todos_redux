import React from "react";
import Item from "./Item";


import './styles.scss';

const List = ({ todos, onRemoveTodo, onCheckTodo}) => (
  <ul className="list">
    {todos.map(({id, value, checked }) => (
      <Item
        key={Math.round(Math.random() * 300)}
        id={id}
        value={value}
        onRemoveTodo={onRemoveTodo}
        onCheckTodo={onCheckTodo}
        checked={checked}
      />
    ))}
  </ul>
)

export default List;
