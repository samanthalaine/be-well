import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
    IconButton
  } from "@material-ui/core";
  import { MoreVert, ThumbUpIcon } from "@material-ui/icons";
  import "./post.css";
  import { useState } from "react";
  import { Users } from "./dummyData"


  
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
  
  const Post = ({ img, title, post }) => {
    const user = Users.filter(user => user.id === 1)
    console.log(user[0].username)

    const classes = useStyles();
    const postProfileImg = Users.filter((u) => u.id === post?.userId)[0].profilePicture
    const postImage='https://media.istockphoto.com/photos/portrait-of-female-biker-smiling-for-camera-in-public-park-picture-id1270401890?b=1&k=20&m=1270401890&s=170667a&w=0&h=reGiOec2FpRGg5eHs0qRqwBO9aZuMrHxAP4djcQZWq0='
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} className="postProfileImg" image={postProfileImg} title="Post" />
          <CardContent>
            <Typography gutterBottom>
            <span className="postUsername">
              {Users.filter((user)=> user.id === post.userId)[0].username}
            </span>
            </Typography>
            <span className="postDate">{post.date}</span>
            <img className="postImg" src={post.photo} alt="" />
            <Typography  className="postText">
            {post.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Like
          </Button>
          <Button size="small" color="primary">
            Love
          </Button>
          <Typography className="postCommentText">{post.comment > 1 ? <span>{post.comment} comments</span> : <span>{post.comment} comment</span>}</Typography>
        </CardActions>
      </Card>
      </main>
    );
  };
  
  export default Post;