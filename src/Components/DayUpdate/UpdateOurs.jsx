import React from "react";
import Styles from "./UpdateOurs.module.scss";
const UpdateWeather = ({ time, Icon, tempInDeg }) => {
  return (
    <>
      <div className={Styles.weatherDataContainer}>
        <div>
          <p>{time}</p>
          <span className={Icon}></span>
          <p>{`${tempInDeg} °`}</p>
        </div>
      </div>
    </>
  );
};

export default UpdateWeather;
