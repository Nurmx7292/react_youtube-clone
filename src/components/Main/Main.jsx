import React from 'react'
import classes from "./Main.module.css"
export const Main = ({children}) => {
  return (
    <div className={classes["main-wrapper"]}>
        {children}
    </div>
  )
}
