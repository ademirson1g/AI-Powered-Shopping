import { LOAD_LISTS, ADD_ITEM, ADD_LIST, EDIT_LIST, DELETE_LIST } from "../redux/reducerExports";

export const loadLists = (lists, totalLists) => ({
  type: LOAD_LISTS,
  payload: lists
});

export const addItem = (listId, item) => ({
  type: ADD_ITEM,
  payload: { listId, item }
});

export const addList = (id, title, items) => ({
  type: ADD_LIST,
  payload: { id, title, items }
});

export const editList = (listId, editedTitle, editedItems) => ({
  type: EDIT_LIST,
  payload: { listId, editedTitle, editedItems }
});

export const deleteList = (listId) => ({
  type: DELETE_LIST,
  payload: listId,
});