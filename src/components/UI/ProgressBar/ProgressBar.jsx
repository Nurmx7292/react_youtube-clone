import React from 'react'
import classes from "./ProgressBar.module.css"
export const ProgressBar = () => {
  return (
    <div className={classes.progressContainer}>
        <span className={`${classes["time-from"]} ${classes.time}`}>1:34</span>
        <div className={classes.progressBar}>
        <div className={classes.progress} style={{ width: "10%" }}></div>
        </div>
        <span className={`${classes["time-to"]} ${classes.time}`}>19:00</span>
    </div>
  )
}
