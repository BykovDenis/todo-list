import React from 'react';
import TodoListInputVanillaComponent from '../components/todo-list-input-vanilla';
import { todoListAddItem, todoListChangeItem } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function TodoListInputVanilla(props) {
  console.log('render1');
  return (
    <div>
      <TodoListInputVanillaComponent
        todoListItem={props.todoListItem}
        todoListChangeItem={props.todoListChangeItem}
        todoListAddItem={props.todoListAddItem}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todoListItem: state.todoList.todoListItem,
  };
}

function mapDispatchToProps(dispatch) {
  const bindActions = {
    todoListChangeItem,
    todoListAddItem,
  };
  return bindActionCreators(bindActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListInputVanilla);
