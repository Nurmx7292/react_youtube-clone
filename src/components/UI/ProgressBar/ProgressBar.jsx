import React from "react";
import classes from "./ProgressBar.module.css";
export const ProgressBar = ({ currentTime, duration }) => {
  return (
    <div className={classes.progressContainer}>
      <div className={`${classes["time-from"]} ${classes.time}`}>
        {currentTime}
      </div>
      <div className={classes.progressBar}>
        <div className={classes.progress} style={{ width: "21.5%" }}></div>
      </div>
      <div className={`${classes["time-to"]} ${classes.time}`}>{duration}</div>
    </div>
  );
};
