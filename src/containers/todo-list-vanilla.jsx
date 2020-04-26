import React from 'react';
import TodoListVanillaComponent from '../components/todo-list-vanilla';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

function TodoListVanilla(props) {
  console.log('render2')
  return (
    <div>
      <TodoListVanillaComponent todoListItems={props.todoListItems} />
    </div>
  );
}

const todoListItems = (state) => state.todoList.todoListItems;

const getTodoListItemsSelector = createSelector(todoListItems, (items) => {
  return items;
});

function mapStateToProps(state) {
  return {
    todoListItems: getTodoListItemsSelector(state), //state.todoList.todoListItems,
  };
}

export default connect(mapStateToProps, null)(TodoListVanilla);
