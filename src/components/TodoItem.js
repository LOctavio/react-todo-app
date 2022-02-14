import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { todo } = props;

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => props.handleChangeProps(todo.id)}
      />
      <button type="submit" onClick={() => props.deleteTodoProps(todo.id)}>Delete</button>
      <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
