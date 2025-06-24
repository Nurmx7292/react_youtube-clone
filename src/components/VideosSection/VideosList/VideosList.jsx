import React from 'react'
import classes from "./VideosList.module.css"
import { VideoCard } from '../../UI/VideoCard/VideoCard'
export const VideosList = ({videos}) => {
  return (
    <ul className={classes["videos-list"]}>
        {
        videos.map(video=><VideoCard key={video.id} {...video}/>)
        }
    </ul>
  )
}
