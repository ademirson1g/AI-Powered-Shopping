import React from "react";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

import { AnalyticSection } from "../../../styles/AnalyticSection";

const Analytics = () => {
  return (
    <AnalyticSection>
      <div className="analytic ">
        <div className="content">
          <h5>Saved this month</h5>
          <p className="text-sm text-center italic">Based on income</p>
          <h2 className="text-center font-bold mt-2">$682.5</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5 className="text-center">Money Left</h5>
          <p className="text-sm text-center italic">
            Based on Budget Analytics
          </p>
          <h2 className="mt-1 font-bold text-center">$350.40</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>People met</h5>
          <h2 className="text-center mt-2 font-bold">321</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Activity</h5>
          <h2>$540.50</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </AnalyticSection>
  );
};

export default Analytics;
