import React from "react";
import "./Main.css";
import Adult from "./Adult/Adult";
import Kid from "./Kid/Kid";
import Symptoms from "./Symptoms/Symptoms";

function Main() {
  return (
    <div className="Main">
      <div className="header">
        <h3>А вдруг СМА?</h3>
        <p>Выберите, кто Ваш пациент:</p>
      </div>
      <div className="adultKidWrapper">
        <div className="adultWrapper">
            <Adult />
        </div>
        <div className="kidWrapper">
            <Kid />
        </div>
      </div>

      <Symptoms />
    </div>
  );
}

export default Main;
