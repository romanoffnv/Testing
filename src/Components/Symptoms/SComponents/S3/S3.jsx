import React, { useState } from "react";
import Cross from "../Cross/Cross";
import './S3.css'

function S3() {
    const [hover, setHover] = useState(false);
  return (
    <div className="sypmIcon s3">
      <div className="sypmIcon__group">
        <Cross />
        <div
          className="sypmIcon__img"
          id = "sypmIcon__img3"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        ></div>
      </div>
      {hover && (
        <div className="sypmIcon__sympMsg" id = "Msg3" style={{ height: "fit-content" }}>
          Нарушения жевания <br />и глотания
        </div>
      )}
    </div>
  );
}

export default S3
