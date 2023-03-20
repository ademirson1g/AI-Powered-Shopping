import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import InputField from "../../atoms/InputField";
import TransparentButton from "../../atoms/TransparentButton";

const ShoopingListItem = React.memo(
  ({
    list,
    handleInputChange,
    inputValue,
    handleAddItem,
    handleEditTitle,
    setInputValue,
    handleDeleteItem,
  }
  ) => (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 m-4 bg-gray-700 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4 ">
        <span className="text-lg font-bold text-[#ffc107] italic truncate w-full">{list.title}</span>
        <FaEdit
          className="cursor-pointer text-white hover:text-gray-800"
        />
      </div>
      <ul className="list-none">
        {list.items.map((item, index) => (
          <li
            key={index}
            className="mb-2 flex items-center justify-between w-full"
          >
            <span className="truncate text-black lg:text-lg sm:text-sm md:text-md sm:truncate w-52">{item}</span>
            <div className="flex items-center">
              <FaEdit
                className="cursor-pointer text-white hover:text-gray-800 ml-2"
                onClick={() => handleEditItem(list.id, index)}
              />
              <FaTrashAlt
                className="cursor-pointer text-white hover:text-gray-800 ml-2"
                onClick={() => handleDeleteItem(list.id, index)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="flex mt-4">
        <InputField
          key={`input-${list.id}`}
          className="bg-gray-500"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TransparentButton
          key={`button-${list.id}`}
          className="ml-2"
          onClick={() => handleAddItem(list.id)}
        >
          Add Item
        </TransparentButton>
      </div>
      <div className="mt-4 text-center">
        <TransparentButton>Delete List</TransparentButton>
      </div>
    </div>
  )
);

ShoopingListItem.propTypes = {
  list: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleEditTitle: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

export default ShoopingListItem;
