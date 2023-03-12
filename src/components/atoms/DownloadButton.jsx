import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const DownloadButton = () => {
  return (
    <button
      type="button"
      class="flex rounded-2xl bg-[#EE5152] px-8 pt-3 pb-2 font-bold text-white mt-10 ml-4"
    >
      <p className="bg-[#EE5152] mb-2"> Download Our App </p>
      <AiOutlineArrowRight className="ml-3 bg-[#EE5152]" size={25} />
    </button>
  );
};

export default DownloadButton;
