import React from "react";
import "./Cross.css";
function Cross() {
  return (
    <div className="sypmIcon__cross">
      <div className="bar">
        <div className="barPatch"></div>
      </div>
      <div className="bar rotate">
        <div className="barPatch"></div>
      </div>
    </div>
  );
}

export default Cross;
