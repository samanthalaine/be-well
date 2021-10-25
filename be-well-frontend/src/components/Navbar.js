import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import { Cancel, Mail, Notifications, Search, Person, ExitToApp } from "@material-ui/icons";
  import { useState } from "react";
  import {Link} from 'react-router-dom'
  import { useContext } from "react";
  import { AuthContext } from "../context/AuthContext";


  
  const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        display: (props) => (props.open ? "flex" : "none"),
        width: "70%",
      },
    },
    input: {
      color: "white",
      marginLeft: theme.spacing(1),
    },
    cancel: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    searchButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    icons: {
      alignItems: "center",
      display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
      marginRight: theme.spacing(2),
    },
  }));
  
  const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    const { user, dispatch } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const blankProfilePic = "https://media.istockphoto.com/illustrations/female-profile-picture-illustration-id178844408?k=20&m=178844408&s=612x612&w=0&h=SKi1Xp6jss2GuLq_PN5CR5C9_J5NlcnmBAp2qo0V810="
    
    const handleLogout = () =>{
      dispatch({ type: "LOGOUT" })
    }


    return (
      <AppBar style={{ background: "#00ACC1" }} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link to='/' style={{textDecoration: "none"}}>
          <Typography variant="h6" className={classes.logoLg} style={{ color: "#FAFAFA" }}>BeWell</Typography>
          </Link>
          <Typography variant="h6" className={classes.logoSm}>
            
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase placeholder="Search BeWell..." className={classes.input} />
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={classes.icons}>
            <Search
              className={classes.searchButton}
              onClick={() => setOpen(true)}
            />
            <Badge badgeContent={0} color="secondary" className={classes.badge}>
              <Person />
            </Badge>
            <Badge badgeContent={0} color="secondary" className={classes.badge}>
              <Mail />
            </Badge>
            <Badge badgeContent={0} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <Badge badgeContent={0} color="secondary" className={classes.badge}>
              <ExitToApp onClick={handleLogout}/>
            </Badge>
            <Link to={`/profile/${user.username}`}>

            <Avatar
              src={user.profilePicture}  
              alt='user profile picture'
              className="navbarImg"
            />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
