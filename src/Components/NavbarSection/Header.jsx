import React from "react";
import Styles from "./Header.module.scss";

const Heads = ({ checkWeather, inputHandler, value }) => {
  return (
    <>
      <div className={Styles.NavbarContainer}>
        <div>
          <span>
            <img src="../images/headerImg1.png" alt="error" />
          </span>
          <p>Weather_app</p>
        </div>
        <div className={Styles.NavbarContainer__inputSection}>
          <div>
            <i className="fa-solid fa-search"></i>
            <input type="text" onChange={inputHandler} value={value} placeholder="Search City... " />
            <button onClick={checkWeather}>Search</button>
          </div>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-location"></i>
            <p>Location</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Heads;
