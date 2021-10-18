import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  ExitToApp,
  Home,
  Person,
  Settings,
  Group,
  RssFeed,
  Chat
} from "@material-ui/icons";
import "./leftbar.css";


const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
      overflowY: "scroll"
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} style={{}}>
      <div className={classes.item}>
        <RssFeed className={classes.icon} />
        <Typography className={classes.text}>Feed</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <Group className={classes.icon} />
        <Typography className={classes.text}>Groups</Typography>
      </div>
      <div className={classes.item}>
        <Chat className={classes.icon} />
        <Typography className={classes.text}>Messages</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
      
      <ul className="sidebarFriendList">
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
         <li>friend</li>
        </ul>
    </Container>
  );
};

export default Leftbar;