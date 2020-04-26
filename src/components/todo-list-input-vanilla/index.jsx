import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import withTodoList from '../../hocs/with-todo-list';

function TodoListInputVanilla(props) {
  const onTodoListItemChange = (evt) => {
    const element = evt.target;
    const { value } = element;
    props.todoListChangeItem(value);
    evt.stopPropagation();
  };

  const onTodoListItemAppend = (evt) => {
    if (props.todoListItem !== null && props.todoListItem > '') {
      props.todoListAddItem(props.todoListItem);
      props.todoListChangeItem('');
    }
    evt.stopPropagation();
  };
  return (
    <div className="container">
      <label htmlFor="todo-element">Todo элемент</label> {'     '}
      <input
        className="input"
        type="text"
        id="todo-element"
        value={props.todoListItem}
        onChange={onTodoListItemChange}
      />
      <button className="button" color="primary" onClick={onTodoListItemAppend}>
        Add
      </button>
    </div>
  );
}

TodoListInputVanilla.propTypes = {
  todoListItem: PropTypes.string.isRequired,
  todoListChangeItem: PropTypes.func.isRequired,
  todoListAddItem: PropTypes.func.isRequired,
};

export default withTodoList(TodoListInputVanilla);
