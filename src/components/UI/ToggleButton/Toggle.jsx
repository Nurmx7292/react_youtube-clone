import React from "react";
import classes from "./Toggle.module.css";
export const Toggle = ({ toggleName }) => {
  return (
    <div className={classes.toggle}>
      <h3 className={classes["toggle-name"]}>{toggleName}</h3>
      <button className={classes["toggle-button"]}>
        <img src="/assets/Toggle.svg" alt="#" />
      </button>
    </div>
  );
};
