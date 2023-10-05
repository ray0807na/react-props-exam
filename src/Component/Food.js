// rafce

import React from "react";
import "./Food.css";

const Food = ({ name, foodImg }) => {
  return (
    <div className="favFood">
      <img src={foodImg} alt={name} className="foodImg" width="300px" />
      <div className="foodName">{name}</div>
    </div>
  );
};

export default Food;
