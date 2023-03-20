import { ADD_ITEM, ADD_LIST, LOAD_LISTS, DELETE_LIST } from "./reducerExports";

export const shoppingreducer = (state = [], action) => {
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
  }
};
