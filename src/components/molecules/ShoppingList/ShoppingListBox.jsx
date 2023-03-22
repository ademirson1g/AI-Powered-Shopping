import React from "react";
import classNames from "classnames";

import InputField from "../../atoms/InputField";
import TransparentButton from "../../atoms/TransparentButton";
import ShoopingListItem from "./ShoppingListItem";

const ShoppingListBox = ({
  handleInputChange,
  inputValue,
  handleListTitleChange,
  listTitle,
  handleAddItem,
  state,
  handleCreateList,
  setInputValue,
  showInput,
  dispatch
}) => {
  const isCreateButtonDisabled = showInput && listTitle.trim() === "";

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap">
        {state.map((list) => (
          <ShoopingListItem
            key={list.id}
            list={list}
            handleInputChange={handleInputChange}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleAddItem={handleAddItem}
            dispatch={dispatch}
          />
        ))}
      </div>
      {showInput && (
        <div className="mt-4 w-48 sm:w-64 md:w-96 lg:w-128 mx-auto text-center">
          <InputField
            type="text"
            label="Create your list"
            value={listTitle}
            onChange={handleListTitleChange}
          />
        </div>
      )}
      <div className="text-white p-2 rounded-lg mt-4 text-center">
        <TransparentButton
          onClick={handleCreateList}
          className={classNames("mx-auto", {
            "w-48": !showInput,
            "w-auto": showInput,
          })}
          disabled={isCreateButtonDisabled}
        >
          {showInput ? "Create List" : "Create New List"}
        </TransparentButton>
      </div>
    </div>
  );
};

export default ShoppingListBox;
