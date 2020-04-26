import React, { Component, PureComponent } from 'react';
import TodoListVanillaComponent from '../components/todo-list-vanilla';
import TodoListInputVanilla from '../components/todo-list-input-vanilla';
import { createSelector } from 'reselect';
import { todoListAddItem, todoListChangeItem } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function TodoListVanilla(props) {
  console.log('render')
  return (
    <div>
      <TodoListInputVanilla
        todoListItem={props.todoListItem}
        todoListChangeItem={props.todoListChangeItem}
        todoListAddItem={props.todoListAddItem}
      />
      <TodoListVanillaComponent todoListItems={props.todoListItems} />
    </div>
  );
}

const todoListItems = (state) => state.todoList.todoListItems;

const getTodoListItemsSelector = createSelector(todoListItems, (items) => {
  debugger;
  return items;
});

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoListVanilla);
