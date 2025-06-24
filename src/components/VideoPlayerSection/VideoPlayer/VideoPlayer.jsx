import React from 'react'
import classes from "./VideoPlayer.module.css"
import { Player } from './Player'
import { Button } from '../../UI/Button/Button'

export const VideoPlayer = () => {
  return (
    <div>
        <Player/>
        <h1 className={classes["video-title"]}>Dude You Re Getting A Telescope</h1>
        <div className="video-info">
            <div className="video-views">
                230k views
            </div>
            <div className="video-controls">
                <Button icon={"assets/Like.svg"} text={"123k"}/>
                <Button icon={"assets/Dislike.svg"} text={"475k"}/>
                <Button icon={"assets/Share.svg"} text={"Share"}/>
            </div>
        </div>
    </div>
  )
}
