import React from "react";
import Styles from "./SunriseSunset.module.scss";
import Paragraph from "../CommonParagraph/paragraph";
const SunriseSunsetTime = ({ sunrise, sunset }) => {
  return (
    <>
      <div className={Styles.timeContainer}>
        <Paragraph text={"Sunrise & Sunset"} color={"rgb(98 85 84)"} fontWeight={"500"} />
        <div>
          <span className="fa-solid fa-sun"></span>
          <div>
            <p>Sunrise</p>
            <strong>{sunrise}</strong>
          </div>
          <i className={"fa-solid fa-arrow-right-arrow-left"}></i>
          <span className={"fa-solid fa-moon"}></span>
          <div>
            <p>Sunrise</p>
            <strong>{sunset}</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default SunriseSunsetTime;
