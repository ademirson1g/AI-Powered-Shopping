import React from "react";

import '../../animation.css'
import HeaderText from "../atoms/HeaderText";
import Navigation from "../molecules/Navigation";

const Combined = () => {
  return (
    <div className="animated">
      <Navigation />
      <HeaderText />
    </div>
  );
};

export default Combined;
