import React from "react";
import Styles from "./AirIndex.module.scss";
import Paragraph from "../CommonParagraph/paragraph";

const AirIndexDetails = () => {
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
            <strong>3.90</strong>
          </div>
          <div>
            <p>SO2</p>
            <strong>7.75</strong>
          </div>
          <div>
            <p>NO2</p>
            <strong>33.6</strong>
          </div>
          <div>
            <p>O3</p>
            <strong>38.6</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirIndexDetails;
