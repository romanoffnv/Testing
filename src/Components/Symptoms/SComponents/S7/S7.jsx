import React, { useState } from "react";
import Cross from "../Cross/Cross";
import './S7.css'

function S7() {
    const [hover, setHover] = useState(false);
    return (
      <div className="sypmIcon s7">
        <div className="sypmIcon__group">
          <Cross />
          <div
            className="sypmIcon__img"
            id = "sypmIcon__img7"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          ></div>
        </div>
        {hover && (
          <div className="sypmIcon__sympMsg" id = "Msg7" style={{ height: "fit-content" }}>
            Вывих бедра
          </div>
        )}
      </div>
    );
}


export default S7
