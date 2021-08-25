import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      <button onClick={() => props.deleteTodoProps(props.todo.id)}>Delete</button>
      {props.todo.title}
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
};

export default TodoItem;
