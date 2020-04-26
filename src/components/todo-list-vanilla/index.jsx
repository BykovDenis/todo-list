import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function TodoListVanilla(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Todo name</th>
        </tr>
      </thead>
      <tbody>
        {props.todoListItems &&
          props.todoListItems.map((todoListElement, index) => (
            <tr key={index}>
              <td className="table-cell">{todoListElement}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

TodoListVanilla.propTypes = {
  todoListItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoListVanilla;
