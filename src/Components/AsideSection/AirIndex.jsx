import React from "react";
import Styles from "./AirIndex.module.scss";
import Paragraph from "../CommonParagraph/paragraph";

const AirIndexDetails = ({ pm25, so2, no2, o3 }) => {
  return (
    <>
      <div className={Styles.airContainer}>
        <div className={Styles.airContainer__header}>
          <Paragraph text={"Air Quality Index"} fontWeight={"600"} color={"rgb(98 85 84)"} />
          <span>Good</span>
        </div>
        <div className={Styles.airContainer__temp}>
          <div>
            <span className="fa-solid fa-wind"></span>
          </div>
          <div>
            <p>PM 2.5</p>
            <strong>{pm25}</strong>
          </div>
          <div>
            <p>SO2</p>
            <strong>{so2}</strong>
          </div>
          <div>
            <p>NO2</p>
            <strong>{no2}</strong>
          </div>
          <div>
            <p>O3</p>
            <strong>{o3}</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirIndexDetails;
