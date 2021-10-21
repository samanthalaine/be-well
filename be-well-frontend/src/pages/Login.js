
   
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useContext, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { loginCall } from "../apiCalls";




// // function Copyright(props) {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         BeWell
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// const theme = createTheme();

// export default function Login() {
//   const email = useRef();
//   const password = useRef();
//   const { user, isFetching, dispatch } = useContext(AuthContext);



//   const handleSubmit = (event) => {
//     event.preventDefault();
//     loginCall(
//       { email: email.current.value, password: password.current.value },
//       dispatch
//     );
    
//   };
//   console.log(user)

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar style={{ background: "#00ACC1" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in to BeWell
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               type="email"
//               autoFocus
//               ref={email}
              
//             />
//             <TextField
//               margin="normal"
//               required
//               minLength="6"
//               fullWidth
//               label="Password"
//               type="password"
//               id="password"
//               ref={password}
              
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" style={{ color: "#00ACC1" }} />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               style={{ background: "#00ACC1" }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
//       </Container>
//     </ThemeProvider>
//   );
// }



import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BeWell</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on BeWell.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}