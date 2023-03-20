import { firestore, COLLECTIONS } from "../../firebaseConfig/firebaseConfig";
import { fetchUserShoppingLists, saveShoppingList } from "../../services/firebaseService";
import { loadLists, addList, addItem } from "../shoppingActions";

export const fetchLists = (userId) => async (dispatch) => {
  try {
    const lists = await fetchUserShoppingLists(userId);
    dispatch(loadLists(lists));
  } catch (error) {
    console.error("Error fetching lists: ", error);
  }
};

export const createList = (userId, listTitle) => async (dispatch) => {
  try {
    const listId = await saveShoppingList(userId, listTitle);
    dispatch(addList(listId, listTitle, []));
  } catch (error) {
    console.error("Error creating list: ", error);
  }
};

export const updateListItems = (listId, items) => async (dispatch) => {
  try {
    await firestore
      .collection(COLLECTIONS.LISTS)
      .doc(listId)
      .update({ items: firebase.firestore.FieldValue.arrayUnion(items) });
    dispatch(addItem(listId, items));
  } catch (error) {
    console.error("Error adding item to list: ", error);
  }
};
