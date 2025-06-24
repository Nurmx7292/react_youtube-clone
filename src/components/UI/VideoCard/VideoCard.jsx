import React from 'react'
import classes from "./VideoCard"
export const VideoCard = ({time,title,meta}) => {
  return (
    <li class={classes["video-card"]}>
        <img src="https://placehold.co/250x150/F9A8D4/31343C" alt="Astronomy Or Astrology"/>
        <div class={classes["video-time"]}>{time}</div>
        <div class={classes["video-info"]}>
            <div class={classes["video-title"]}>{title}</div>
            <div class={classes["video-meta"]}>
                <div>{meta.views} • {meta.date} ago •</div>
                <div>{meta.author}</div>
            </div>
        </div>
    </li>
  )
}
