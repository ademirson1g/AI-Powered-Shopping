import React from "react";
import PropTypes from "prop-types";
import TransparentButton from "./TransparentButton";

const Dialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 z-10">
        <div className="text-lg font-bold mb-4 text-center">{message}</div>
        <div className="flex justify-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <TransparentButton
            className="border border-gray-500 text-gray-700 px-4 py-2 rounded-md"
            onClick={onCancel}
          >
            Cancel
          </TransparentButton>
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Dialog;
