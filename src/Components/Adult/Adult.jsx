import React from "react";
import { adultDescriptions } from "../Data";
import "./Adult.css";

function Adult() {
  return (
    <div className="adult">
      <h3 className="title">Взрослый</h3>
      <div className="adult__img cardImg"></div>
      <div className="descWrapper">
        <p className="description" id = 'adult_desc1'>{adultDescriptions.desc1}</p>
        <p className="description" id = 'adult_desc2'>{adultDescriptions.desc2}</p>
        <p className="description" id = 'adult_desc3'>{adultDescriptions.desc3}</p>
      </div>
    </div>
  );
}

export default Adult;
