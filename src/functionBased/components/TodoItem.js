import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { todo } = props;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => props.handleChangeProps(todo.id)}
        />
        <button type="submit" onClick={() => props.deleteTodoProps(todo.id)}>Delete</button>
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={todo.title}
        onChange={(e) => {
          props.setUpdate(e.target.value, todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
