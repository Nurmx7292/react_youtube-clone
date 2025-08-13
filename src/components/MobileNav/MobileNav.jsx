import React from "react";
import classes from "./MobileNav.module.css";
export const MobileNav = () => {
  return (
    <nav className={classes["mobile-nav"]}>
      <a href="#" className={classes["mobile-nav-item"]}>
        <img src="assets/home.svg" alt="Home" />
        <span>Home</span>
      </a>
      <a href="#" className={classes["mobile-nav-item"]}>
        <img src="assets/trends.svg" alt="Trending" />
        <span>Trending</span>
      </a>
      <a href="#" className={classes["mobile-nav-item"]}>
        <img src="assets/subscriptions.svg" alt="Subscriptions" />
        <span>Subscriptions</span>
      </a>
      <a href="#" className={classes["mobile-nav-item"]}>
        <img src="assets/folder.svg" alt="Library" />
        <span>Library</span>
      </a>
    </nav>
  );
};
