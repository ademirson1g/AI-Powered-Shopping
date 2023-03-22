import { firestore, COLLECTIONS } from "../firebaseConfig/firebaseConfig";

export const saveShoppingList = async (userId, listTitle) => {
  const listRef = firestore.collection(COLLECTIONS.LISTS).doc();
  const listId = listRef.id;

  await listRef.set({
    id: listId,
    userId,
    title: listTitle,
    items: [],
  });

  return listId;
};

// Query the shopping lists collection for all lists that belong to the user
export const fetchUserShoppingLists = async (userId) => {
  const snapshot = await firestore
    .collection(COLLECTIONS.LISTS)
    .where("userId", "==", userId)
    .get();
  return snapshot.docs.map((doc) => doc.data());
};
