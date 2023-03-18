import React from "react"
import { Card, CardImg } from "reactstrap"
import { FcAndroidOs } from "react-icons/fc"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

import TransparentButton from "../atoms/TransparentButton"
import DownloadButton from "../atoms/DownloadButton"
import logo from "../../assets/images/logo.png"

const Homepage = () => {
  const styles = {
    ultraViolet: { backgroundColor: "#101820FF", height: "80%" },
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
  }

  return (
    <div className="relative">
      <div
        style={styles.ultraViolet}
        className="absolute w-full mt-32 rounded-t-3xl"
      ></div>
      <div className="max-w-md mx-auto rounded-2xl relative z-10">
        <Card>
          <CardImg
            top
            src="https://images.unsplash.com/photo-1678470501765-5ae51490f0a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODkyNjAzNw&ixlib=rb-4.0.3&q=80&w=1080"
            alt="card-img"
          />
        </Card>
        <h1 className="mt-2">
          <strong className="uppercase">Cheapest Item Today Worldwide</strong>
          <p className="mt-3">
            <strong>Location :</strong> Sarajevo
          </p>
          <p>
            <strong>Price : </strong> 20 €
          </p>
        </h1>
      </div>
      <div className="hidden md:block  absolute top-40 left-32 p-4 font-bold">
        <TransparentButton>Best Budget Plan</TransparentButton>
        <br />
        <br />
        <TransparentButton>Guarantee money save</TransparentButton>
        <div className=" flex justify-center mt-16 ml-10 relative">
          <div className="rounded-full bg-gray-500 w-20 h-20 mr-24 absolute z-0"></div>
          <FcAndroidOs
            size={80}
            className="rounded-full bg-[#293072] relative z-10"
          />
        </div>
        <p className=" text-white mt-4 mr-14 ml-10" style={styles.italic}>
          Comming Soon On IOS
        </p>
        <div className="">
          <DownloadButton />
        </div>
      </div>
      <div className="hidden md:block absolute top-72 right-72">
        <div className="w-72 flex ">
          <Card>
            <CardImg
              src="https://images.unsplash.com/photo-1678470501765-5ae51490f0a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODkyNjAzNw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="card-img"
              className="border-4 border-[#293072] rounded-2xl"
            />
          </Card>
          <div className="w-96 text-white mt-10 ml-5 font-bold">
            <p className=" font-berkshire text-2xl">Cheapest</p>
            <h3 className=" text-4xl font-berkshire">$ 50</h3>
            <p className=" mt-7 font-berkshire ">Save up to 80%</p>
            <span className="flex  ml-2 mt-4">
              <AiOutlineArrowLeft
                className="  rounded-full border-4 border-white mr-4 cursor-pointer"
                size={40}
              />
              <AiOutlineArrowRight
                className="  rounded-full border-4 border-white cursor-pointer"
                size={40}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="relative mt-10 bg-[#82CDCF] rounded-t-3xl font-bold text-3xl py-4 lg:py-0">
        <h1>OFFICIAL SPONSORS</h1>
        <div className="flex flex-wrap justify-center items-center py-4 px-4">
          <img
            src={logo}
            className="w-24 h-24 md:w-32 md:h-32 mx-4 my-4 rounded-full"
            alt="Sponsor Logo"
          />
          <img
            src={logo}
            className="w-24 h-24 md:w-32 md:h-32 mx-4 my-4 rounded-full"
            alt="Sponsor Logo"
          />
          <img
            src={logo}
            className="w-24 h-24 md:w-32 md:h-32 mx-4 my-4 rounded-full"
            alt="Sponsor Logo"
          />
          <img
            src={logo}
            className="w-24 h-24 md:w-32 md:h-32 mx-4 my-4 rounded-full"
            alt="Sponsor Logo"
          />
          <img
            src={logo}
            className="w-24 h-24 md:w-32 md:h-32 mx-4 my-4 rounded-full"
            alt="Sponsor Logo"
          />
          <img
            src={logo}
            className="w-24 h-24 md:w-32 md:h-32 mx-4 my-4 rounded-full"
            alt="Sponsor Logo"
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage
