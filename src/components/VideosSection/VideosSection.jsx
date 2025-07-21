import React from "react";
import { useMediaQuery } from "react-responsive";
import classes from "./VideosSection.module.css";
import { VideosList } from "./VideosList/VideosList";
import { Toggle } from "../UI/ToggleButton/Toggle";
import imgOne from "../../assets/video-one.png";
import imgTwo from "../../assets/video-two.png";
import imgThree from "../../assets/video-three.png";
import imgFour from "../../assets/video-Four.png";

const videos = [
  {
    id: 1,
    title: "Baby Monitor Technology",
    time: "7:36",
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
    time: "2:19",
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
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const modifiedVideos = videos.map((video, index) => {
    if (index === 1 && isMobile) {
      return {
        ...video,
        title: "Advertising Outdoors",
      };
    }
    return video;
  });
  return (
    <div className={classes["videos-section"]}>
      <div className={classes["list-info"]}>
        <div className={classes["list-name"]}>Next</div>
        <Toggle toggleName={"Autoplay"} />
      </div>
      <VideosList videos={modifiedVideos} />
    </div>
  );
};
