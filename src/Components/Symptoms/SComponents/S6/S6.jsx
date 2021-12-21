import React, { useState } from "react";
import Cross from "../Cross/Cross";
import './S6.css'

function S6() {
    const [hover, setHover] = useState(false);
    return (
      <div className="sypmIcon s6">
        <div className="sypmIcon__group">
          <Cross />
          <div
            className="sypmIcon__img"
            id = "sypmIcon__img6"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          ></div>
        </div>
        {hover && (
          <div className="sypmIcon__sympMsg" id = "Msg6" style={{ height: "fit-content" }}>
            Контрактура <br />суставов
          </div>
        )}
      </div>
    );
}

export default S6
