import { TODO_LIST_ADD_ITEM, TODO_LIST_CHANGE_ITEM } from '../constants';

export function todoListChangeItem(value) {
  return {
    type: TODO_LIST_CHANGE_ITEM,
    payload: value,
  };
}

export function todoListAddItem(value) {
  return {
    type: TODO_LIST_ADD_ITEM,
    payload: value,
  };
}
