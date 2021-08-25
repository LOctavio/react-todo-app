import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => props.handleChangeProps(todo.id)}
      />
      <button type="submit" onClick={() => props.deleteTodoProps(todo.id)}>Delete</button>
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.string.isRequired,
  deleteTodoProps: PropTypes.string.isRequired,
};

export default TodoItem;
