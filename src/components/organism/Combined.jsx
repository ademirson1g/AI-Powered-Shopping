import React from "react";

import HeaderText from "../atoms/HeaderText";
import Homepage from "../molecules/Homepage";
import Navigation from "../molecules/Navigation";

const Combined = () => {
  return (
    <div>
      <Navigation />
      <HeaderText />
    </div>
  );
};

export default Combined;
