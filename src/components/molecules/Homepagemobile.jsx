import React from "react";
import { FcAndroidOs } from "react-icons/fc";

import TransparentButton from "../atoms/TransparentButton";
import DownloadButton from "../atoms/DownloadButton";
import { Card, CardImg } from "reactstrap";

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
      <div className="md:block absolute top-96">
        <div className="w-72 flex bg-white">
          <Card>
            <CardImg
              src="https://plus.unsplash.com/premium_photo-1669998297585-e0ceaab884bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="card-img"
              className="border-4 border-[#293072] rounded-2xl"
            />
          </Card>
          <div className="w-96 bg-white text-[#293072] mt-10 ml-5 font-bold">
            <p className="bg-white font-berkshire text-2xl">Cheapest</p>
            <h3 className="bg-white text-4xl font-berkshire">$ 50</h3>
            <p className="bg-white mt-7 font-berkshire ">Save up to 80%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepagemobile;
