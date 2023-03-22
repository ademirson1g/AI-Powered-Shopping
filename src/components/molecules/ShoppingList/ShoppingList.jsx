import React, { useCallback, useEffect, useReducer, useState } from "react";
import firebase from "firebase/compat/app";

import { shoppingreducer } from "../../reducers/shoppingreducer";
import Section from "../../../styles/Section";
import withAuth from "../../hoc/withAuth";
import Sidebar from "../Dashboard/Sidebar";
import ShoppingListBox from "./ShoppingListBox";
import { firestore, COLLECTIONS } from "../../firebaseConfig/firebaseConfig";
import {
  createList,
  fetchLists,
} from "../../redux/functions/shoppingFunctions";

const ShoppingList = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [listTitle, setListTitle] = useState("");
  const [state, dispatch] = useReducer(shoppingreducer, []);
  const [showInput, setShowInput] = useState(false);
  const { user } = props;

  // Load Data without refresh
  useEffect(() => {
    fetchLists(user.uid)(dispatch);
  }, [user.uid, dispatch]);

  // Add item to list
  const handleAddItem = useCallback(
    async (listId) => {
      try {
        await firestore
          .collection(COLLECTIONS.LISTS)
          .doc(listId)
          .update({
            items: firebase.firestore.FieldValue.arrayUnion(inputValue),
          });
        setInputValue("");
        dispatch({
          type: "ADD_ITEM",
          payload: { listId, item: inputValue },
        });
      } catch (error) {
        console.error("Error adding item to the list: ", error);
      }
    },
    [dispatch, inputValue]
  );

  // Create List
  const handleCreateList = useCallback(async () => {
    if (!showInput) {
      setShowInput(true);
    } else {
      try {
        createList(user.uid, listTitle)(dispatch);
        setListTitle("");
        setShowInput(false);
      } catch (error) {
        console.error("Error creating list: ", error);
      }
    }
  }, [dispatch, listTitle, showInput, user]);

  // Item input change
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  // Title input change
  const handleListTitleChange = useCallback((e) => {
    setListTitle(e.target.value);
  }, []);

  return (
    <div className="bg-black">
      {user && (
        <div>
          <Sidebar />
          <Section>
            <div className="title">
              <h1 className="text-center text-4xl mt-10">
                <span className="italic">Shopping List Dashboard</span>
              </h1>
              <div className="line bg-white mt-4 w-full">
                <hr />
              </div>
            </div>
            <ShoppingListBox
              handleInputChange={handleInputChange}
              inputValue={inputValue}
              setInputValue={setInputValue}
              handleListTitleChange={handleListTitleChange}
              listTitle={listTitle}
              handleAddItem={handleAddItem}
              state={state}
              handleCreateList={handleCreateList}
              showInput={showInput}
              dispatch={dispatch}
            />
          </Section>
        </div>
      )}
    </div>
  );
};

export default withAuth(ShoppingList);
