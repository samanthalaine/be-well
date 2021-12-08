import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    makeStyles,
    Typography
    
  } from "@material-ui/core";
  //import { MoreVert, ThumbUpIcon } from "@material-ui/icons";
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
  
  const Post = ({ post, posts, setPosts }) => {

    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(() => {
      setIsLiked(post.likes.includes(currentUser?._id));
    }, [currentUser._id, post.likes]);

    useEffect(() =>{
      const fetchUser = async () => {

        const res = await axios.get(`/users?userId=${post.userId}`);
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { userId:currentUser._id },
      });
      setPosts(posts.filter(post => post._id !== id));
    } catch (err) {}
  };


    const classes = useStyles();
    
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
                alt="profile pic"
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
          {like === 1 ? `${like} Like` : `${like} Likes`}
          </Button>
          <Button size="small" onClick={()=>handleDelete(post._id)} style={{backgroundColor: 'red', color: '#fafafa'}}>delete</Button>
          
          <Typography className="postCommentText">{post.comment > 1 ? <span>{post.comment} comments</span> : <span>{post.comment} comment</span>}</Typography>
        </CardActions>
      </Card>
      </main>
    );
  };
  
  export default Post;