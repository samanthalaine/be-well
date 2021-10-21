import React from 'react'
import "./online.css";


function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="leftbarFriend">
        <div className="leftbarProfileImgContainer">
          <img className="leftbarProfileImg" src={user.profilePicture} alt="" />
          <span className="leftbarOnline"></span>
        </div>
        <span className="leftbarUsername">{user.username}</span>
      </li>
    )
}

export default Online
