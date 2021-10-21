import axios from "axios";
//import {LoginStart, LoginSuccess, LoginFailure} from "./context/AuthActions" 

export const loginCall = async (userCredential, dispatch) => {
    dispatch({type:"LOGIN_START"});
    try {
      axios.post("auth/login",userCredential).then(res =>{
        console.log(res.data);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
      });
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE",payload:err})
    }
  }