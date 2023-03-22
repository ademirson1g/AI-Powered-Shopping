import React from "react";

import withAuth from "../../hoc/withAuth";
import Sidebar from "../Dashboard/Sidebar";
import MarketSection from "../../../styles/MarketSection";
import { BiSearch } from "react-icons/bi";
import MarketCard from "./MarketCard";

const Markets = (props) => {
  const { user } = props;

  return (
    <div>
      {user && (
        <div>
          <Sidebar />
          <MarketSection>
            <div className="search">
              <BiSearch className="text-white mr-2" />
              <input type="text" placeholder="Search For Markets" />
            </div>
            <div className="title">
              <h1 className="text-center text-4xl mt-10">
                <span className="italic">Markets</span>
              </h1>
              <div className="line bg-white mt-4 w-full">
                <hr />
              </div>
            </div>
            <MarketCard />
          </MarketSection>
        </div>
      )}
    </div>
  );
};

export default withAuth(Markets);
