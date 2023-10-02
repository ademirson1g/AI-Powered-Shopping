import {
  ADD_ITEM,
  ADD_LIST,
  LOAD_LISTS,
  DELETE_LIST,
  EDIT_LIST,
} from "./reducerExports";

const initialState = {
  lists: [],
  totalLists: 0,
};

export const shoppingreducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_LIST:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          items: action.payload.items,
        },
      ];
    case ADD_ITEM:
      return state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            items: [...list.items, action.payload.item],
          };
        }
        return list;
      });
    case LOAD_LISTS:
      return action.payload;
    case DELETE_LIST:
      return state.filter((list) => list.id !== action.payload);
    case EDIT_LIST:
      return state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            title: action.payload.editedTitle,
            items: action.payload.editedItems,
          };
        }
        return list;
      });
    default:
      return state;
  }
};
