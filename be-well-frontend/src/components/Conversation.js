import React from 'react'
import "./conversation.css"
import axios from "axios";
import { useEffect, useState } from "react";

function Conversation({conversation, currentUser}) {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const friendId = conversation.members.find((member) => member !== currentUser._id);
  
      const getUser = async () => {
        try {
          const res = await axios("/users?userId=" + friendId);
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }, [currentUser, conversation]);

    return (
        <div className="conversation">
        <img
          className="conversationImg"
          src={user?.profilePicture ? user.profilePicture : "https://media.istockphoto.com/photos/female-portrait-icon-as-avatar-or-profile-picture-picture-id477333976?b=1&k=20&m=477333976&s=170667a&w=0&h=0MKAqzspB2Tcx7Yf42nYI0Pda9qK1oZap25Mru21K40="}
          alt="user profilePicture"
        />
        <span className="conversationName">{user?.username}</span>
      </div>
    )
}

export default Conversation
