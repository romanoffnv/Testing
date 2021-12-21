import React, { useState } from "react";
import Cross from "../Cross/Cross";
import './S5.css'

function S5() {
    const [hover, setHover] = useState(false);
    return (
      <div className="sypmIcon s5">
        <div className="sypmIcon__group">
          <Cross />
          <div
            className="sypmIcon__img"
            id = "sypmIcon__img5"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          ></div>
        </div>
        {hover && (
          <div className="sypmIcon__sympMsg" id = "Msg5" style={{ height: "fit-content" }}>
            Неспособность бегать, <br /> изменение походки
          </div>
        )}
      </div>
    );
}

export default S5
