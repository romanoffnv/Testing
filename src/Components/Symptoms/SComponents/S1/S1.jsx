import React, { useState } from "react";
import Cross from "../Cross/Cross";
import './S1.css'

function S1() {
    const [hover, setHover] = useState(false);
  return (
    <div className="sypmIcon s1">
      <div className="sypmIcon__group">
        <Cross />
        <div
          className="sypmIcon__img"
          id = 'sypmIcon__img1'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        ></div>
      </div>
      {hover && (
        <div className="sypmIcon__sympMsg" id = "Msg1" style={{ height: "fit-content" }}>
          Сколиоз
        </div>
      )}
    </div>
  );
}

export default S1;
