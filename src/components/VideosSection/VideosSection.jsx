import React, { useEffect, useState } from "react";
import classes from "./VideosSection.module.css";
import { VideosList } from "./VideosList/VideosList";
import toggleMobile from "/assets/toggleMobile.svg";
import toggle from "/assets/Toggle.svg";
import { Toggle } from "../UI/ToggleButton/Toggle";
import imgOne from "../../assets/video-one.png";
import imgTwo from "../../assets/video-two.png";
import imgThree from "../../assets/video-three.png";
import imgFour from "../../assets/video-10.png";

const videos = [
  {
    id: 1,
    title: "Baby Monitor Technology",
    time: "8:00",
    meta: {
      date: "5 days",
      author: "Dollie Blair",
      views: "123k",
    },
    cover: imgOne,
  },
  {
    id: 2,
    title: "A Good Autoresponder",
    time: "8:00",
    meta: {
      date: "5 days",
      author: "Dollie Blair",
      views: "123k",
    },
    cover: imgTwo,
  },
  {
    id: 3,
    title: "Selecting The Right Hotel",
    time: "8:00",
    meta: {
      date: "5 days",
      author: "Dollie Blair",
      views: "123k",
    },
    cover: imgThree,
  },
  {
    id: 4,
    title: "Selecting The Right Hotel",
    time: "8:00",
    meta: {
      date: "5 days",
      author: "Dollie Blair",
      views: "123k",
    },
    cover: imgFour,
  },
];
export const VideosSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  const isMobile = width < 768;
  const modifiedVideos = videos.map((video, index) => {
    if (index === 0 && isMobile) {
      return {
        ...video,
        time: "7:36",
      };
    }
    if (index === 1 && isMobile) {
      return {
        ...video,
        time: "2:19",
        title: "Advertising Outdoors",
      };
    }
    return video;
  });
  return (
    <div className={classes["videos-section"]}>
      <div className={classes["list-info"]}>
        <div className={classes["list-name"]}>Next</div>
        <Toggle
          toggleName={"Autoplay"}
          imgSrc={`${width > 768 ? toggle : toggleMobile}`}
        />
      </div>
      <VideosList videos={modifiedVideos} />
    </div>
  );
};
