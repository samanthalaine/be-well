import React from 'react'
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import "./navbar.css";


function Navbar() {
    return (
        <div className="navbarContainer">
        <div className="navbarLeft">
          <span className="logo">BeWell</span>
        </div>
        <div className="navbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for a friend or post..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarLinks">
            <span className="navbarLink">Home</span>
            <span className="navbarLink">Feed</span>
          </div>
          <div className="navbarIcons">
            <div className="navbarIconItem">
              <Person />
              <span className="navbarIconBadge">1</span>
            </div>
            <div className="navbarIconItem">
              <Chat />
              <span className="navbarIconBadge">2</span>
            </div>
            <div className="navbarIconItem">
              <Notifications />
              <span className="navbarIconBadge">1</span>
            </div>
          </div>
          
        </div>
      </div>
    )
}

export default Navbar
