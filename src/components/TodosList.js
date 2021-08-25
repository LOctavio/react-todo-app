import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList(props) {
  const { handleChangeProps, deleteTodoProps, todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodosList;
