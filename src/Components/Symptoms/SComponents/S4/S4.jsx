import React, { useState } from "react";
import Cross from "../Cross/Cross";
import './S4.css'

function S4() {
    const [hover, setHover] = useState(false);
    return (
      <div className="sypmIcon s4">
        <div className="sypmIcon__group">
          <Cross />
          <div
            className="sypmIcon__img"
            id = "sypmIcon__img4"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          ></div>
        </div>
        {hover && (
          <div className="sypmIcon__sympMsg" id = "Msg4"style={{ height: "fit-content" }}>
            Дыхательная <br /> недостаточность/ <br />респираторная <br />дисфункция
          </div>
        )}
      </div>
    );
}

export default S4
