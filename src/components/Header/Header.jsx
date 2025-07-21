import React from "react";
import classes from "./Header.module.css";
import Menu from "../../assets/Menu.svg";
import userPic from "../../assets/Userpic.png";
export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <button>
          <img src={Menu} alt="#" />
        </button>
        <a href="/">
          <img src="assets/Black.svg" alt="YouTube Logo" />
          {/* <img src="assets/Logo_mobile.svg" alt="YouTube Logo" />
          <img src="assets/youtubeLogo.svg" alt="YouTube Logo Text" /> */}
        </a>
      </div>
      <form action="#" className={classes["search-bar"]}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          aria-label="Search query"
        />
        <button className={classes.search} aria-label="Search">
          <img src="assets/Search.svg" alt="#" />
        </button>
        <button className={classes.more} aria-label="More Button">
          <img src="assets/Vertical.svg" alt="#" />
        </button>
      </form>
      <div className={classes["header-actions"]}>
        <button>
          <img src="assets/video.svg" />
        </button>
        <button>
          <img src="assets/more.svg" />
        </button>
        <button>
          <div className={classes["notifications-count"]}>3</div>
          <img src="assets/notification.svg" />
        </button>
        <img
          className={classes["profile-pic"]}
          src={userPic}
          alt="Profile image"
        />
      </div>
    </header>
  );
};

{
  /* <button>
          <img src="assets/video.svg" />
        </button>
        <button>
          <img src="assets/more.svg" />
        </button>
        <button>
          <img src="assets/notification.svg" />
        </button> */
}
