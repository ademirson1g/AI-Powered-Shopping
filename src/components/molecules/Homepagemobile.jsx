import React from "react";
import { FcAndroidOs } from "react-icons/fc";

import TransparentButton from "../atoms/TransparentButton";
import DownloadButton from "../atoms/DownloadButton";

const Homepagemobile = () => {
  const styles = {
    backgroundColor: "white",
    italic: { fontStyle: "italic" },
  };
  return (
    <div className="md:hidden bg-white absolute top-80 left-0 w-full p-4">
      <TransparentButton>Best Budget Plan</TransparentButton>
      <br />
      <br />
      <TransparentButton>Guarantee money save</TransparentButton>
      <div className="bg-white flex justify-center mt-10 ml-10 relative">
        <div className="rounded-full bg-gray-500 w-20 h-20 mr-24 absolute z-0"></div>
        <FcAndroidOs
          size={80}
          className="rounded-full bg-[#293072] relative z-10"
        />
      </div>
      <p className="bg-white text-black mt-4 mr-14 ml-10" style={styles.italic}>
        Comming Soon On IOS
      </p>
      <div className="bg-white ml-8" >
        <DownloadButton />
      </div>
    </div>
  );
};

export default Homepagemobile;
