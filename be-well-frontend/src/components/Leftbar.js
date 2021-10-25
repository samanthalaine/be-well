import "./leftbar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  ExitToApp
} from "@material-ui/icons"

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Add, Remove } from "@material-ui/icons";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";





export default function Leftbar({}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user } = useContext(AuthContext);
  const blankProfilePic = "https://media.istockphoto.com/illustrations/female-profile-picture-illustration-id178844408?k=20&m=178844408&s=612x612&w=0&h=SKi1Xp6jss2GuLq_PN5CR5C9_J5NlcnmBAp2qo0V810="



  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);



  return (
    <>
     
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
             <span className="leftbarListItemText"> Messages</span>
          </li>
         
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          
          <li className="leftbarListItem">
            <ExitToApp className="leftbarIcon" />
            <span className="leftbarListItemText">Logout</span>
          </li>
        </ul>
        <hr className="leftbarHr" />
        <h6 className="leftbarTitle">People you follow</h6>
        
        <div className="leftbarFollowings">
         
          {friends.map((friend) => (
            
              <div className="leftbarFollowing">
                <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
                <img
                  src={friend.profilePicture}
                  alt="friends"
                  className="leftbarFollowingImg"
                />
                </Link>
                <span className="leftbarFollowingName">{friend.username}</span>
              </div>
            
          ))}
        </div>
      </div>
      
    </div>
    </>
  );
}