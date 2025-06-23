import React from 'react'
import classes from "./Header.module.css"
export const Header = () => {
  return (
    <header className={classes.header}>
            <div className="logo">
                <button>
                    <img src="assets/Menu.svg"/>
                </button>
                <a href="/">
                    <img src="assets/Logo_mobile.svg" alt="YouTube Logo"/>
                    <img src="assets/youtubeLogo.svg" alt="YouTube Logo Text"/>
                </a>
            </div>
            <form action="#" className="search-bar">
                <input type="text" name="search" id="search" placeholder="Search" aria-label="Search query"/>
                <button className="search" aria-label="Search"><img src="assets/search.svg" alt="#"/></button>
            </form>
            <div className="header-actions">
                <button><img src="assets/video.svg"/></button>
                <button><img src="assets/more.svg"/></button>
                <button><img src="assets/notification.svg"/></button>
                <img className="profile-pic" src="https://picsum.photos/40/40" alt="Profile image"/>
            </div>
        </header>
  )
}
