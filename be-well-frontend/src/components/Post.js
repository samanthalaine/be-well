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
  import { useState, useEffect, useContext } from "react";
  import axios from "axios";
  import { Link } from "react-router-dom";
  import { format } from "timeago.js";
  import { AuthContext } from "../context/AuthContext";


  
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

    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(() => {
      setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() =>{
      const fetchUser = async () => {

      const res = await axios.get(`users/${post.userId}`)
      setUser(res.data)
      }
      fetchUser()
  }, [post.userId])

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
   

    const classes = useStyles();
    const blankProfilePic = "https://media.istockphoto.com/illustrations/female-profile-picture-illustration-id178844408?k=20&m=178844408&s=612x612&w=0&h=SKi1Xp6jss2GuLq_PN5CR5C9_J5NlcnmBAp2qo0V810="
    const blankPage = "https://images.unsplash.com/photo-1531685250784-7569952593d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsYW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
      <Card className={classes.card}>
        <CardActionArea>
          
          <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    
                }
                alt="profile picture"
              />
            </Link>
          <CardContent>
            <Typography gutterBottom>
            <span className="postUsername">
              {user.username}
            </span>
            </Typography>
            <span className="postDate">{format(post.createdAt)}</span>
                      <img className="postImg" src={PF + post.img} alt="" />

            <Typography  className="postText">
            {post.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" onClick={likeHandler} style={{backgroundColor: '#80DEEA', color: '#fafafa'}}>
          {like} Likes
          </Button>
          
          <Typography className="postCommentText">{post.comment > 1 ? <span>{post.comment} comments</span> : <span>{post.comment} comment</span>}</Typography>
        </CardActions>
      </Card>
      </main>
    );
  };
  
  export default Post;