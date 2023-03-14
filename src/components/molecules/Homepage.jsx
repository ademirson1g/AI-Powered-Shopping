import React from "react";
import { Card, CardImg } from "reactstrap";
import { FcAndroidOs } from "react-icons/fc";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import TransparentButton from "../atoms/TransparentButton";
import DownloadButton from "../atoms/DownloadButton";
import Homepagemobile from "./Homepagemobile";
import logo from "../../assets/images/logo.png";

const Homepage = () => {
  const styles = {
    whiteBackground: { backgroundColor: "white", height: "120%" },
    purpleBackground: {
      backgroundImage: "linear-gradient(to bottom, #8B5CF6, #7C3AED)",
    },
    italic: { fontStyle: "italic" },
    colorWidth: {
      position: "absolute",
      left: 150,
      right: 250,
      height: 200,
    },
  };

  return (
    <div className="relative">
      <div
        style={styles.whiteBackground}
        className="absolute w-full mt-32 rounded-t-3xl"
      ></div>
      <div className="max-w-md mx-auto rounded-2xl relative z-10">
        <Card>
          <CardImg
            top
            src="https://images.unsplash.com/photo-1550321989-65d089904d5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="card-img"
          />
        </Card>
        {/* FOR MOBILE */}
        <Homepagemobile />
      </div>
      {/* FOR DESKTOP */}
      <div className="hidden md:block bg-white absolute top-40 left-32 p-4 font-bold">
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
        <p
          className="bg-white text-black mt-4 mr-14 ml-10"
          style={styles.italic}
        >
          Comming Soon On IOS
        </p>
        <div className="bg-white">
          <DownloadButton />
        </div>
      </div>
      <div className="hidden md:block absolute top-72 right-72">
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
            <span className="flex bg-white ml-2 mt-4">
              <AiOutlineArrowLeft
                className=" bg-white rounded-full border-4 border-[#293072] mr-4 cursor-pointer"
                size={40}
              />
              <AiOutlineArrowRight
                className=" bg-white rounded-full border-4 border-[#293072] cursor-pointer"
                size={40}
              />
            </span>
          </div>
        </div>
      </div>
      <div
        style={styles.colorWidth}
        className="absolute mt-10 rounded-t-3xl font-bold text-3xl"
      >
        <h1 className="mt-2 rounded-t-3xl">OFFICIAL SPONSORS</h1>
        <div className="flex mt-3">
          <img src={logo} className="ml-24 rounded-full w-32"/>
          <img src={logo} className="ml-28 rounded-full w-32"/>
          <img src={logo} className="ml-28 rounded-full w-32"/>
          <img src={logo} className="ml-28 rounded-full w-32"/>
          <img src={logo} className="ml-28 rounded-full w-32"/>
          <img src={logo} className="ml-28 rounded-full w-32"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
