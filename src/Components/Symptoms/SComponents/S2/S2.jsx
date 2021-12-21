import React, { useState } from "react";
import Cross from "../Cross/Cross";
import './S2.css'

function S2() {
    const [hover, setHover] = useState(false);
  return (
    <div className="sypmIcon s2">
      <div className="sypmIcon__group">
        <Cross />
        <div
          className="sypmIcon__img"
          id = "sypmIcon__img2"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        ></div>
      </div>
      {hover && (
        <div className="sypmIcon__sympMsg" id = "Msg2" style={{ height: "fit-content" }}>
          Ограниченная способность <br /> поднимать руки <br /> и переносить предметы
        </div>
      )}
    </div>
  );
}

export default S2;
