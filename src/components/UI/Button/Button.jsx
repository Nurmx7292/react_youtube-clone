import React from 'react'
import classes from "./Button.module.css"
export const Button = ({icon, text}) => {
  return (
    <button className={classes.button}>
        <img src={icon} alt="#" />
        <data className={classes.text}>{text}</data>
    </button>
  )
}
