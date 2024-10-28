import React from 'react';

const TodoItem = ({ id, text, completed }) => {
  return (
    <li>
      <input type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodoComplete(id)} 
      />
      <span>{todo.text}</span>
      <span
        className='delete'
        onClick={() => removeTodo(id)}
      >
        &times;
      </span>
    </li>
  )
}

export default TodoItem;