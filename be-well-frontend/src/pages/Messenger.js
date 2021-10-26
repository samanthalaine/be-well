import React from "react";
import "./messenger.css";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core";
import Conversation from "../components/Conversation";
import Message from "../components/Message";
import ChatOnline from "../components/ChatOnline";

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

function Messenger() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} /> 

        <div className="messenger">
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input placeholder="Search for friends" className="chatMenuInput"/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message/>
                    <Message own = {true}/>
                    <Message/>
                    <Message own = {true}/>
                    <Message/>
                    <Message/>
                </div>
                <div className="chatBoxBottom">
                    <textarea className="chatMessageInput" placeholder="Send a message..."></textarea>
                    <button className="chatSubmitButton">Send</button>
                </div>
            </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
                <ChatOnline/>
            </div>
        </div>
        </div>
      </main>
    </>
  );
}

export default Messenger;
