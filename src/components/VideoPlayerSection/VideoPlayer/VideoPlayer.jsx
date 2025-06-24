import React from 'react'
import classes from "./VideoPlayer.module.css"
import { Player } from './Player'
import { Button } from '../../UI/Button/Button'
import Oval from "../../../assets/Oval.png"
export const VideoPlayer = () => {
  return (
    <div>
        <Player/>
        <h1 className={classes["video-title"]}>Dude You Re Getting A Telescope</h1>
        <div className={classes["video-info"]}>
            <div className={classes["video-views"]}>
                230k views
            </div>
            <div className={classes["video-controls"]}>
                <Button icon={"assets/Like.svg"} text={"123k"}/>
                <Button icon={"assets/Dislike.svg"} text={"475k"}/>
                <Button icon={"assets/Share.svg"} text={"Share"}/>
                <button><img src="assets/More2.svg" alt="#" /></button>
            </div>
        </div>
        <div className={classes["channel-card"]}>
            <div className={classes["channel-image"]}>
                <img src={Oval} alt="#" />
            </div>
            <div className={classes["channel-info"]}>
                <h2 className={classes["channel-title"]}>Food & Drink</h2>
                <div className={classes["publish-date"]}>Published on 14 Jun 2019</div>
                <p className={classes["channel-descr"]}>
                    A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. 
                </p>
                <div className={classes["more"]}>Show more</div>
            </div>
            <div className={classes["subscribe-button"]}>
                Subscribe 2.3m
            </div>
        </div>
    </div>
  )
}
