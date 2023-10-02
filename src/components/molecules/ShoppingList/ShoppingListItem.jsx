import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { AiFillSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { toast } from "react-toastify";

import InputField from "../../atoms/InputField";
import TransparentButton from "../../atoms/TransparentButton";
import { editList } from "../../redux/shoppingActions";
import {
  editListTitleAndItems,
  handleDeleteList,
} from "../../redux/functions/shoppingFunctions";
import Dialog from "../../atoms/Dialog";

const ShoopingListItem = React.memo(
  ({
    list,
    inputValue,
    handleAddItem,
    handleEditTitle,
    setInputValue,
    dispatch,
    
  }) => {
    const isCreateButtonDisabled = inputValue.trim() === "";

    // Title List Name
    const [editing, setEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(list.title);
    const [prevTitle, setPrevTitle] = useState("");

    // Item Name
    const [editItem, setEditItem] = useState(false);
    const [editedItemTitle, setEditedItemTitle] = useState("");

    // State which checks if the item is deleted
    const [isDeleted, setIsDeleted] = useState(false);

    // Confirmation dialog
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const toggleDialog = () => {
      setIsDialogOpen((prevState) => !prevState);
    };

    const editTitleListItem = (index) => {
      setEditedItemTitle(list.items[index]);
      setEditItem(index);
    };

    const editTitleList = () => {
      setPrevTitle(list.title);
      setEditedTitle(list.title);
      setEditing(true);
    };

    const cancelEditTitle = () => {
      setEditing(false);
      handleEditTitle(list.id, prevTitle);
    };

    // Title and item edit
    const handleEditListAndItem = async (id, index) => {
      const updatedItems = [...list.items];
      let editedItem = editedItemTitle;
      if (editItem !== false && editItem === index) {
        updatedItems[editItem] = editedItem;
      } else {
        editedItem = inputValue;
      }
      try {
        await editListTitleAndItems(
          list.id,
          editing ? editedTitle : list.title,
          updatedItems
        )(dispatch);
        // Update the state with the edited data
        const editedList = {
          ...list,
          title: editing ? editedTitle : list.title,
          items: updatedItems,
        };
        dispatch(editList(editedList.id, editedList.title, editedList.items));
        setEditItem(false);
        setEditing(false);
      } catch (error) {
        console.error("Error updating list: ", error);
      }
    };

    // Delete Item
    const handleDeleteItem = async (listId, index) => {
      const updatedItems = [...list.items];
      updatedItems.splice(index, 1);
      try {
        await editListTitleAndItems(listId, list.title, updatedItems)(dispatch);
        // Update the state with the edited data
        const editedList = {
          ...list,
          items: updatedItems,
        };
        dispatch(editList(editedList.id, editedList.title, editedList.items));
      } catch (error) {
        console.error("Error updating list: ", error);
      }
    };

    // Delete List
    const handleListDelete = async () => {
      toggleDialog();
      try {
        await handleDeleteList(list.id)(dispatch);
        setIsDeleted(true);
      } catch (error) {
        toast.error("Error deleting list:" + error.message);
      }
    };

    if (isDeleted) {
      return null; 
    }

    return (
      <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 m-4 bg-gray-700 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4 ">
          <span className="text-lg font-bold text-[#ffc107] italic truncate w-full text-center">
            {editing ? (
              <div className="flex">
                <InputField
                  className="mt-2"
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <div className="mt-3 ml-5 cursor-pointer flex">
                  <AiFillSave
                    color="white"
                    onClick={() => handleEditListAndItem(list.id, editItem)}
                  />
                  <GiCancel
                    className="ml-3"
                    color="white"
                    onClick={cancelEditTitle}
                  />
                </div>
              </div>
            ) : (
              <h1>{list.title}</h1>
            )}
            <div className="line bg-white mt-4 w-full">
              <hr />
            </div>
          </span>
          {!editing && (
            <div>
              <FaEdit
                className="cursor-pointer text-white hover:text-gray-800 mb-4"
                onClick={editTitleList}
              />
            </div>
          )}
        </div>
        <ul className="list-none">
          {list.items.map((item, index) => (
            <li
              key={index}
              className="mb-2 flex items-center justify-between w-full"
            >
              <span className="truncate text-black lg:text-lg sm:text-sm md:text-md sm:truncate w-80">
                {editItem === index ? (
                  <div className="flex">
                    <InputField
                      className="mt-2"
                      type="text"
                      value={editItem === index ? editedItemTitle : editedTitle}
                      onChange={(e) =>
                        editItem === index
                          ? setEditedItemTitle(e.target.value)
                          : setEditedTitle(e.target.value)
                      }
                    />
                    <div className="mt-3 ml-5 cursor-pointer flex">
                      <AiFillSave
                        color="white"
                        onClick={() => handleEditListAndItem(list.id, editItem)}
                      />
                      <GiCancel
                        className="ml-3"
                        color="white"
                        onClick={() => setEditItem(false)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="items-center">
                    {item}
                    <div className="flex justify-end float-right mt-1">
                      <FaEdit
                        className="cursor-pointer text-white hover:text-gray-800 ml-2"
                        onClick={() => editTitleListItem(index)}
                      />
                      <FaTrashAlt
                        className="cursor-pointer text-white hover:text-gray-800 ml-2"
                        onClick={() => handleDeleteItem(list.id, index)}
                      />
                    </div>
                  </div>
                )}
              </span>
            </li>
          ))}
        </ul>
        {isDialogOpen && (
          <Dialog
            message="Are you sure you want to delete the list?"
            onConfirm={handleListDelete}
            onCancel={toggleDialog}
          />
        )}
        <div className="flex flex-col mt-4 sm:flex-row sm:items-center">
          <InputField
            key={`input-${list.id}`}
            className="bg-gray-500 w-52"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <TransparentButton
            key={`button-${list.id}`}
            className="ml-6 mt-2 sm:mt-0 sm:ml-4 w-52"
            onClick={() => handleAddItem(list.id)}
            disabled={isCreateButtonDisabled}
          >
            Add Item
          </TransparentButton>
        </div>
        <div className="mt-4 text-center">
          <TransparentButton onClick={handleListDelete && toggleDialog}>
            Delete List
          </TransparentButton>
        </div>
      </div>
    );
  }
);

ShoopingListItem.propTypes = {
  list: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleEditTitle: PropTypes.func,
};

export default ShoopingListItem;
