import React, { useEffect } from "react";

import Section from "../../../styles/Section";
import withAuth from "../../hoc/withAuth";
import Sidebar from "../Dashboard/Sidebar";

const ShoppingList = (props) => {
  const { user } = props;

  return (
    <div className="bg-black">
      {user && (
        <div>
          <Sidebar />
          <Section>
            <div className="title">
              <h1 className="text-center text-4xl mt-10">
                <span className="italic">Shopping List Dashboard</span>
              </h1>
              <div className="line bg-white mt-4 w-full">
                <hr />
              </div>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
};

export default withAuth(ShoppingList);
