import React, { useEffect } from "react";

import MonthSavingDashboard from "./MonthSavingDashboard";
import DealsOfToday from "./DealsOfToday";
import Navbar from "./Navbar";
import Profile from "./Profile";
import NewsFeed from "./NewsFeed";
import scrollreveal from "scrollreveal";
import withAuth from "../../hoc/withAuth";
import Sidebar from "./Sidebar";
import Section from "../../../styles/Section";

const Dashboard = (props) => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  const { user } = props;

  return (
    <div className="bg-black">
      {user && (
        <>
          <Sidebar />
          <Section>
            <Navbar />
            <div className="grid">
              <div className="row__one">
                <DealsOfToday />
              </div>
              <div className="row__two">
                <MonthSavingDashboard />
                <NewsFeed />
                <Profile />
              </div>
            </div>
          </Section>
        </>
      )}
    </div>
  );
};

export default withAuth(Dashboard);
