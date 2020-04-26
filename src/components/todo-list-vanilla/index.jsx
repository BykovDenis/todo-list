import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import withTodoList from '../../hocs/with-todo-list';
import './index.css';

function TodoListVanilla(props) {
  const todoListItems = (props) => props.todoListItems;
  const getTodoListItemsSelector = createSelector(todoListItems, (items) => items);
  const todoListItemsMapped = getTodoListItemsSelector(props);
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th className="table-cell">Todo name</th>
          </tr>
        </thead>
        <tbody>
          {todoListItemsMapped &&
            todoListItemsMapped.map((todoListElement, index) => (
              <tr key={index}>
                <td className="table-cell">{todoListElement}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <ul>
        {todoListItemsMapped &&
          todoListItemsMapped.map((todoListElement, index) => (
            <li key={`${index}-1`} className="table-cell">
              {todoListElement}
            </li>
          ))}
      </ul>
    </Fragment>
  );
}

TodoListVanilla.propTypes = {
  todoListItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withTodoList(TodoListVanilla);
