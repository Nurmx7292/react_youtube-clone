import React from 'react'
import classes from "./VideoPlayer.module.css"
import Cover from "../../../assets/Cover.png"
import { ProgressBar } from '../../UI/ProgressBar/ProgressBar'
export const Player = () => {
  return (
    <div className={classes.player}>
        <img className={classes.cover} src={Cover} alt="#" />
        <div className={classes.controls}>
            <ProgressBar/>
        </div>
    </div>
  )
}
