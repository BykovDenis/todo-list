import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Label from '@material-ui/core/FormLabel';

function TodoListInput(props) {
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
    <div>
      <Label htmlFor="todo-element">Todo элемент</Label> {'     '}
      <Input id="todo-element" value={props.todoListItem} onChange={onTodoListItemChange} />
      <Button color="primary" variant="outlined" onClick={onTodoListItemAppend}>
        Add
      </Button>
    </div>
  );
}

TodoListInput.propTypes = {
  todoListItem: PropTypes.string.isRequired,
  todoListChangeItem: PropTypes.func.isRequired,
  todoListAddItem: PropTypes.func.isRequired,
};

export default TodoListInput;
