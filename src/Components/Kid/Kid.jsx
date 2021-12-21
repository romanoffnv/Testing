import React from "react";
import { kidDescriptions } from "../Data";
import "./Kid.css";

function Kid() {
  return (
    <div className="kid">
      <h3 className="title">Ребенок</h3>
      <div className="kid__img cardImg"></div>
      <div className="descWrapper">
        <p className="description" id = 'kid_desc1'>{kidDescriptions.desc1}</p>
        <p className="description" id = 'kid_desc2'>{kidDescriptions.desc2}</p>
      </div>
    </div>
  );
}

export default Kid;
