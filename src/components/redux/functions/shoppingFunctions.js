import { firestore, COLLECTIONS } from "../../firebaseConfig/firebaseConfig";
import {
  fetchUserShoppingLists,
  saveShoppingList,
} from "../../services/firebaseService";
import { loadLists, addList, addItem, editList, deleteList } from "../shoppingActions";

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


export const editListTitleAndItems = (listId, editedTitle, editedItems) => async (dispatch) => {
  try {
    await firestore
      .collection(COLLECTIONS.LISTS)
      .doc(listId)
      .update({ title: editedTitle, items: editedItems });
    editList(listId, editedTitle, editedItems)
  } catch (error) {
    console.error("Error editing list: ", error);
  }
};

export const handleDeleteList = (listId) => async () => {
  try {
    await firestore.collection(COLLECTIONS.LISTS).doc(listId).delete();
    deleteList(listId)
  } catch (error) {
    console.error("Error deleting list: ", error);
  }
};


