import React from "react";
import Styles from "./Humidity.module.scss";

const HumidityArea = ({ textHeading, className, temScale }) => {
  return (
    <>
      <div className={Styles.humidityCotainer}>
        <p>{textHeading}</p>
        <div className={Styles.humidityCotainer__flexBox}>
          <span className={className}></span>
          <strong>{temScale}</strong>
        </div>
      </div>
    </>
  );
};

export default HumidityArea;
