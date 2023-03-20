import React from "react";
import TransparentButton from "../../atoms/TransparentButton";

const MarketCardModal = ({ isOpen, handleCloseModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={handleCloseModal}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full mx-auto mt-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              Market Information
            </h3>
            <div className="mt-2">
              <p className="text-sm">
                <strong className="text-black mr-2">Location :</strong> 1234
                Main Street, New York, NY 10001
              </p>
              <p className="text-sm">
                <strong className="text-black mr-2">Opening Hours :</strong> 9am
                - 5pm
              </p>
              <p className="text-sm">
                <strong className="text-black mr-2">Website :</strong> konzum.hr
              </p>
            </div>
          </div>
          <div className="text-center">
            <TransparentButton>Daily Catalogue</TransparentButton>
          </div>
          <div
            className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            onClick={handleCloseModal}
          >
            <TransparentButton className="mt-3 w-full sm:mt-0 sm:w-auto sm:text-sm">
              Close
            </TransparentButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCardModal;