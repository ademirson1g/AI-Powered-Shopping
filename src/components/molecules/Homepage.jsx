import React from "react";
import { Card, CardImg } from "reactstrap";
import { FcAndroidOs } from "react-icons/fc";

import TransparentButton from "../atoms/TransparentButton";
import DownloadButton from "../atoms/DownloadButton";
import Homepagemobile from "./Homepagemobile";

const Homepage = () => {
  const styles = {
    backgroundColor: "white",
    italic: { fontStyle: "italic" },
  };

  return (
    <div className="relative">
      <div
        style={styles}
        className="absolute h-full w-full mt-32 rounded-t-3xl"
      ></div>
      <div className="max-w-md mx-auto rounded-2xl relative z-10">
        <Card>
          <CardImg
            top
            src="https://images.unsplash.com/photo-1550321989-65d089904d5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="card-img"
          />
        </Card>
        {/* FOR MOBILE */ }
        <Homepagemobile />
      </div>
      {/* FOR DESKTOP */ }  
      <div className="hidden md:block bg-white absolute top-40 left-32 p-4">
        <TransparentButton>Best Budget Plan</TransparentButton>
        <br />
        <br />
        <TransparentButton>Guarantee money save</TransparentButton>
        <div className="bg-white flex justify-center mt-16 ml-10 relative">
          <div className="rounded-full bg-gray-500 w-20 h-20 mr-24 absolute z-0"></div>
          <FcAndroidOs
            size={80}
            className="rounded-full bg-[#293072] relative z-10"
          />
        </div>
        <p className="bg-white text-black mt-4 mr-14 ml-10" style={styles.italic}>
          Comming Soon On IOS
        </p>
        <div className="bg-white">
        <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
