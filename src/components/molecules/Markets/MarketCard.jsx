import React, { useState } from "react";
import TransparentButton from "../../atoms/TransparentButton";
import MarketCardModal from "./MarketCardModal";

const MarketCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-8">
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
          <div className="bg-gray-700">
            <img
              className="w-full h-48 object-cover"
              src="https://picsum.photos/400/300"
              alt="Card Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                Card Title
              </div>
              <p className="text-black text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                viverra sagittis sapien, nec bibendum ipsum fringilla vel.
              </p>
            </div>
            <div className="px-6 py-4 text-center" onClick={handleOpenModal}>
              <TransparentButton >
                <h1 className="text-black ">Check Out the Market</h1>
              </TransparentButton>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
          <div className="bg-gray-700">
            <img
              className="w-full h-48 object-cover"
              src="https://picsum.photos/400/300"
              alt="Card Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                Card Title
              </div>
              <p className="text-black text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                viverra sagittis sapien, nec bibendum ipsum fringilla vel.
              </p>
            </div>
            <div className="px-6 py-4 text-center" onClick={handleOpenModal}>
              <TransparentButton>
                <h1 className="text-black">Check Out the Market </h1>
              </TransparentButton>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
          <div className="bg-gray-700">
            <img
              className="w-full h-48 object-cover"
              src="https://picsum.photos/400/300"
              alt="Card Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                Card Title
              </div>
              <p className="text-black text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                viverra sagittis sapien, nec bibendum ipsum fringilla vel.
              </p>
            </div>
            <div className="px-6 py-4 text-center" onClick={handleOpenModal}>
              <TransparentButton>
                <h1 className="text-black ">Check Out the Market</h1>
              </TransparentButton>
            </div>
          </div>
        </div>
      </div>
      <MarketCardModal
        isOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default MarketCard;
