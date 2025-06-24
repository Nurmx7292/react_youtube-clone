import React, { useEffect, useState } from 'react'
import classes from "./VideoPlayer.module.css"
import Cover from "../../../assets/Cover.png"
import { ProgressBar } from '../../UI/ProgressBar/ProgressBar'
export const Player = () => {
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener("resize",()=>setWidth(window.innerWidth))
    })
  return (
    <div className={classes.player}>
        <img className={classes.cover} src={Cover} alt="#" />
        <div className={classes.controls}>
            {width>900 && <ProgressBar duration={"3:22"} currentTime={"1:22"}/>}
            <div className={classes.mobileControls}>
                <button><img src="assets/Pause.svg" alt="#" /></button>
                <ProgressBar duration={"10:00"} currentTime={"1:34"} />
                <button><img src="assets/Volume.svg" alt="#" /></button>
            </div>
            <div className={classes.bottomControls}>
                <button><img src="assets/Pause.svg" alt="#" /></button>
                <button><img src="assets/Next.svg" alt="#" /></button>
                <button><img src="assets/Volume.svg" alt="#" /></button>
                <input type="range" className={classes.volume} />
                <button className={classes.subtitles}><img src="assets/Subtitles.svg" alt="#"/></button>
                <button><img src="assets/settings.svg" alt="#" /></button>
                <button><img src="assets/Size.svg" alt="#" /></button>
                <button><img src="assets/FullScreen.svg" alt="#" /></button>
            </div>
        </div>
    </div>
  )
}
