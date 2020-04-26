import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import TodoListComponent from '../components/todo-list';
import TodoListInput from '../components/todo-list-input';
import { todoListChangeItem, todoListAddItem } from '../redux/actions';

function TodoList(props) {
  return (
    <div>
      <TodoListInput
        todoListItem={props.todoListItem}
        todoListChangeItem={props.todoListChangeItem}
        todoListAddItem={props.todoListAddItem}
      />
      <TodoListComponent todoListItems={props.todoListItems} />
    </div>
  );
}

const todoListItems = (state) => state.todoList.todoListItems;

const getTodoListItemsSelector = createSelector(todoListItems, (items) => items);

function mapStateToProps(state) {
  return {
    todoListItems: getTodoListItemsSelector(state), //state.todoList.todoListItems,
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
