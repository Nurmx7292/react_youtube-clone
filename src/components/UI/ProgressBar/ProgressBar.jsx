import React from 'react'
import classes from "./ProgressBar.module.css"
export const ProgressBar = ({currentTime, duration}) => {
  return (
    <div className={classes.progressContainer}>
        <span className={`${classes["time-from"]} ${classes.time}`}>{currentTime}</span>
        <div className={classes.progressBar}>
        <div className={classes.progress} style={{ width: "10%" }}></div>
        </div>
        <span className={`${classes["time-to"]} ${classes.time}`}>{duration}</span>
    </div>
  )
}
