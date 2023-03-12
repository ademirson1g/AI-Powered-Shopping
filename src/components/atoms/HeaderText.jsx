import React from "react";

import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import Homepage from "../molecules/Homepage";

const HeaderText = () => {
  return (
    <div className="text-center text-white mt-5">
      <h1 className="text-4xl md:text-8xl lg:text-9xl font-berkshire leading-tight">
        Save Easily <br />
        Anywhere
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center md:mt-12 mt-2">
        <p className="flex font-bold items-center text-base md:text-lg text-left md:ml-28">
          <FaCreditCard className="mr-2" size={30} color={"red"} /> Secure
          Payment
        </p>
        <p className="flex font-bold items-center text-base md:text-lg text-right md:mr-28 md:mt-0 mt-2">
          <FaMoneyBillWave className="mr-2" size={30} color={"green"} />
          Best for your budget.
        </p>
      </div>
      <div className="mt-10">
        <Homepage />
      </div>
    </div>
  );
};

export default HeaderText;
