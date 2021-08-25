import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TodosList;
