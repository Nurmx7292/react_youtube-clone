import React, { useEffect, useState } from "react";
import classes from "./VideoPlayer.module.css";
import Cover from "../../../assets/Cover.png";
import MobileCover from "../../../assets/Mobile_cover.png";
import { ProgressBar } from "../../UI/ProgressBar/ProgressBar";
export const Player = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  return (
    <div className={classes.player}>
      <img
        className={classes.cover}
        src={`${width > 768 ? Cover : MobileCover}`}
        alt="#"
      />
      <div className={classes.controls}>
        {width > 900 && <ProgressBar duration={"19:00"} currentTime={"1:34"} />}
        <div className={classes.mobileControls}>
          <button>
            <img src="assets/Pause.svg" alt="#" />
          </button>
          <ProgressBar duration={"10:00"} currentTime={"1:34"} />
          <button>
            <img src="assets/Volume.svg" alt="#" />
          </button>
        </div>
        <div className={classes.bottomControls}>
          <div className={classes["main-controls"]}>
            <button>
              <img src="assets/Pause.svg" alt="#" />
            </button>
            <button>
              <img src="assets/Next.svg" alt="#" />
            </button>
            <button>
              <img src="assets/Volume.svg" alt="#" />
            </button>
            <div>
              <div className={classes.bar}>
                <div className={classes.fill}></div>
              </div>
            </div>
          </div>
          <div className={classes["secondary-controls"]}>
            <button className={classes.subtitles}>
              <img src="assets/Subtitles.svg" alt="#" />
            </button>
            <button>
              <img src="assets/settings.svg" alt="#" />
            </button>
            <button>
              <img src="assets/Size.svg" alt="#" />
            </button>
            <button>
              <img src="assets/FullScreen.svg" alt="#" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
