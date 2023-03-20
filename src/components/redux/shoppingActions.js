import { LOAD_LISTS, ADD_ITEM, ADD_LIST } from "../reducers/reducerExports";

export const loadLists = (lists) => ({
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

