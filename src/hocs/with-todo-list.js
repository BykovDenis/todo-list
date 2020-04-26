import React, { Component, PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { todoListChangeItem, todoListAddItem } from '../redux/actions';

const withTodoListVanilla = (Component) => {
  class ComponentWrapped extends PureComponent {
    render() {
      const { props } = this;
      return <Component {...this.props} />;
    }
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

  return connect(mapStateToProps, mapDispatchToProps)(ComponentWrapped);
};

export default withTodoListVanilla;
