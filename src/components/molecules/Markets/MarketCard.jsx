import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios

import LazyLoad from "../../atoms/LazyLoad";
import TransparentButton from "../../atoms/TransparentButton";
import MarketCardModal from "./MarketCardModal";

const MarketCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMall, setSelectedMall] = useState(null); 
  const [mallData, setMallData] = useState([]);
  
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/malls")
      .then(response => {
        setMallData(response.data); 
      })
      .catch(error => {
        console.error("Error fetching mall data:", error);
      });
  }, []);

  const handleOpenModal = (mall) => {
    setSelectedMall(mall); 
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedMall(null); 
    setIsModalOpen(false);
  };

  return (
    <div className="py-8">
      <div className="flex flex-wrap justify-center">
        {mallData.map((mall, index) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-2" key={index} style={{ height: "400px" }}>
            <div className="bg-gray-700 h-full">
              <LazyLoad src={mall.image} alt="Mall Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-black">
                  {mall.name}
                </div>
                <p className="text-black text-center">
                  {mall.location}
                </p>
              </div>
              <div className="px-6 py-4 text-center">
                <TransparentButton onClick={() => handleOpenModal(mall)}> {/* Pass the mall data */}
                  <h1 className="text-black ">Check Out the Market</h1>
                </TransparentButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MarketCardModal
        isOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        selectedMall={selectedMall} 
      />
    </div>
  );
};

export default MarketCard;