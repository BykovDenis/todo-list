import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import MuiTableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core';

const TableHeaderCell = withStyles({
  root: {
    fontWeight: 900,
  },
})(MuiTableCell);

function TodoList(props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Todo name</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.todoListItems && props.todoListItems.map((todoListElement, index) => (
          <TableRow key={index}>
            <TableCell>{todoListElement}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

TodoList.propTypes = {
  todoListItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
