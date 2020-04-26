import React from 'react';
import TodoListInputVanilla from '../../containers/todo-list-input-vanilla';
import TodoListVanillaComponent from '../../containers/todo-list-vanilla';

function MainSection(props) {
  return (
    <div>
      <TodoListInputVanilla />
      <TodoListVanillaComponent />
    </div>
  );
}

export default MainSection;
