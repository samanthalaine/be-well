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

import Online from './Online'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Add, Remove } from "@material-ui/icons";
import { AuthContext } from "../context/AuthContext";




export default function Leftbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    
  );


  return (
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
        <h6>My followers</h6>
        <div className="leftbarFollowings">
          <div className="leftbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="leftbarFollowingImg"
            />
            <span className="leftbarFollowingName">John Carter</span>
          </div>
          <div className="leftbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="leftbarFollowingImg"
            />
            <span className="leftbarFollowingName">John Carter</span>
          </div>
          <div className="leftbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="leftbarFollowingImg"
            />
            <span className="leftbarFollowingName">John Carter</span>
          </div>
          <div className="leftbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="leftbarFollowingImg"
            />
            <span className="leftbarFollowingName">John Carter</span>
          </div>
          <div className="leftbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="leftbarFollowingImg"
            />
            <span className="leftbarFollowingName">John Carter</span>
          </div>
          <div className="leftbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="leftbarFollowingImg"
            />
            <span className="leftbarFollowingName">John Carter</span>
          </div>
       
        </div>
       
        {/* <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}