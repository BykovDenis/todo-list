import handleActions from 'redux-actions/lib/handleActions';
import initialState from '../data';
import { TODO_LIST_CHANGE_ITEM, TODO_LIST_ADD_ITEM } from '../constants';

export default handleActions(
  {
    [TODO_LIST_CHANGE_ITEM]: (state, action) => ({
      ...state,
      todoListItem: action.payload,
    }),
    [TODO_LIST_ADD_ITEM]: (state, action) => ({
      ...state,
      todoListItems: [...state.todoListItems, action.payload],
    }),
  },
  initialState
);
