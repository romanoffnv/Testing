import React, { useState } from "react";
import Cross from "../Cross/Cross";

import './S8.css'

function S8() {
    const [hover, setHover] = useState(false);
    return (
      <div className="sypmIcon s8">
        <div className="sypmIcon__group">
          <Cross />
          <div
            className="sypmIcon__img"
            id = "sypmIcon__img8"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          ></div>
        </div>
        {hover && (
          <div className="sypmIcon__sympMsg" id = "Msg8" style={{ height: "fit-content" }}>
            Утомляемость
          </div>
        )}
      </div>
    );
}

export default S8
