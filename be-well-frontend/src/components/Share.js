import React from 'react'
import './share.css'
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import { AuthContext } from "../context/AuthContext";
  import { useContext, useRef, useState } from "react";



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
  const blankProfilePic = "https://media.istockphoto.com/illustrations/female-profile-picture-illustration-id178844408?k=20&m=178844408&s=612x612&w=0&h=SKi1Xp6jss2GuLq_PN5CR5C9_J5NlcnmBAp2qo0V810="


    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePicture || blankProfilePic} alt="profile picture" />
          <input
            placeholder={"What are you up to " + user.username + "?"}
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
    </main>
    )
}

export default Share
