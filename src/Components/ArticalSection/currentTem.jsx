import React from "react";
import Styles from "./currentTem.module.scss";
import Heading from "../CommonH3/heading";
import Paragraph from "../CommonParagraph/paragraph";
const CurrentTem = ({ nowTemp, city, date, month, day, code, desWeather }) => {
  return (
    <>
      <div className={Styles.temContainer}>
        <div className={Styles.temContainer__upperSection}>
          <Heading text={"Now"} color={"#524b4b"} fontSize={"25px"} />
          <div className={Styles.temContainer__upperSection__temp}>
            <h2>
              {nowTemp}
              <span> ℃</span>
            </h2>
            <span>
              <i className="fa-solid fa-cloud"></i>
            </span>
          </div>
          <div style={{ fontSize: "28px" }}>{desWeather}</div>
          <Heading text={"Broken Clouds"} padding={"0px 0px 10px 0px"} color={"#524b4b"} fontWeight={"400"} fontSize={"18px"} />
        </div>
        <div className={Styles.temContainer__bottomSection}>
          <div>
            <span className="fa-regular fa-calendar"></span>
            <Paragraph text={day} />
            <span>{date}</span>
            <span>{month}</span>
          </div>
          <div>
            <span className="fa-solid fa-location-dot"></span>
            <Paragraph text={`${code}, ${city}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentTem;
