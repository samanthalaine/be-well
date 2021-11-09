import React from 'react'
import './share.css'
import {PermMedia, Label,Room, EmojiEmotions, Cancel} from "@material-ui/icons"
import {
    
    makeStyles

  } from "@material-ui/core";
  import { AuthContext } from "../context/AuthContext";
  import { useContext, useRef, useState } from "react";
  import axios from "axios";
  import { Link } from 'react-router-dom'





  const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    card: {
      marginBottom: theme.spacing(5),
    },
    media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
    },
  }));
  


function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const classes = useStyles();

//if there is a new file, new form data will be created. 
//it will indicate file & name. afterwards, it will be uploaded.
//image will be added to new post and then it will post to api as new post.

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    //refresh page after adding post
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        <Link to={`/profile/${user.username}`}>
          <img
            className="shareProfileImg"
            src={
              user.profilePicture}
            alt="Profile picture"
          />
          </Link>
          <input
            placeholder={"What's on your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />

    {/* view preview of post */}
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="#2eb8d1" className="shareIcon" />
              <span className="shareOptionText">Photo</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg, .gif"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="#2eb8d1" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="#2eb8d1" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="#2eb8d1" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
        
    </main>
    )
}

export default Share
