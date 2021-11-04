import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import { Cancel, Mail, Notifications, ExitToApp } from "@material-ui/icons";
  import { useState } from "react";
  import { Link } from 'react-router-dom'
  import { useContext } from "react";
  import { AuthContext } from "../context/AuthContext";
  import DonutLargeIcon from '@mui/icons-material/DonutLarge';



  
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
    const logo = "https://media.discordapp.net/attachments/887887430475186176/902750907853336656/BeWell_Logo.png"
    
    const handleLogout = () =>{
      dispatch({ type: "LOGOUT" })
    }


    return (
      <AppBar style={{ background: "#00ACC1" }} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link to='/' style={{textDecoration: "none"}}>
          {/* <Typography variant="h6" className={classes.logoLg} style={{ color: "#FAFAFA" }}>BeWell <img src={logo} alt='logo' height='20px' width="30px" className={classes.image}/>  </Typography> */}
          <Typography variant="h6" className={classes.logoLg} style={{ color: "#FAFAFA" }}>BeWell</Typography>
          </Link>
          <Typography variant="h6" className={classes.logoSm}>
            
          </Typography>
          <div className={classes.search}>
            {/* <Search />
            <InputBase placeholder="Search BeWell..." className={classes.input} /> */}
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={classes.icons}>
            {/* <Search
              className={classes.searchButton}
              onClick={() => setOpen(true)}
            /> */}
            
            <Link to= '/messenger' style={{color: "white"}} >
            <Badge badgeContent={0} color="secondary" className={classes.badge}>
              <Mail/>
            </Badge>
            </Link>
            <Link to= '/tracker' style={{color: "white"}} >
            <Badge badgeContent={0} color="secondary" className={classes.badge}>
              <DonutLargeIcon/>
            </Badge>
            </Link>
          
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
