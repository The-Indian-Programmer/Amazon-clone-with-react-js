import { Link } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Register.css";
import {db,auth} from "../secret/Firebasecode"
import {useSelector,useDispatch} from "react-redux";
import {registerUser} from "../action";
const Register = () => {
    const dispatch = useDispatch();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  const register = () =>{
      auth.createUserWithEmailAndPassword(email,password)
          .then((auth) => {
                if(auth){
                    dispatch(registerUser(auth))
                    history.push("/")
                }
                setEmail("")
                setPassword("")
          }).catch((error)=> {
            console.log(error.message)
          })
  }
  
  return (
    <div className="register">
      <div className="login_form">
        <div className="container_login">
          <h2 className="login_text">SignIn Here </h2>
          <div className="email">
            <label for="email">Enter Email</label>
            <input
              type="email"
              className="email_input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="password">
            <label for="password">Enter Password</label>
            <input
              type="password"
              className="password_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Enter Your Password"
            />
          </div>

          <div className="sign">
            <button onClick={() => register()} type="button" className="signin_btn">
              Create Account
            </button>
          </div>

          <p className="newtext"> -- Already A Member -- </p>
          <Link to="/login">
            <button
              onClick={() => history.push("/login")}
              className="createbtn"
            >
              SignIn Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
