import React from "react";
import classes from "./VideoCard.module.css";
export const VideoCard = ({ cover, time, title, meta }) => {
  return (
    <li className={classes["video-card"]}>
      <div className={classes["video-img-wrapper"]}>
        <img src={cover} alt="Astronomy Or Astrology" />
        <div className={classes["video-time"]}>{time}</div>
      </div>
      <div className={classes["video-info"]}>
        <div className={classes["video-title"]}>{title}</div>
        <div className={classes["video-meta"]}>
          <div>{meta.views} views</div>
          <div>{meta.author}</div>
        </div>
      </div>
    </li>
  );
};
