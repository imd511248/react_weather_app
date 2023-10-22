import React from "react";
import Styles from "./nxtDyForCast.module.scss";

const UpcomingInfo = ({ nxtDayTemp, Weak, month, date, iconName }) => {
  return (
    <>
      <div className={Styles.nxtDayContainer}>
        <div className={Styles.nxtDayContainer__upcomingDay}>
          <ul>
            <li className={iconName}></li>
            <span>{`${nxtDayTemp} °`}</span>
          </ul>
          <ul>
            <li>{month}</li>
            <li>{date}</li>
          </ul>
          <span>{Weak}</span>
        </div>
      </div>
    </>
  );
};
export default UpcomingInfo;
