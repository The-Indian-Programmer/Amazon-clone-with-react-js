import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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
          <button type="submit" className="signin_btn">
            SignIn
          </button>
        </div>
        <p className="newtext"> -- New To Amazon -- </p>
        <Link to="/register">
          <button className="createbtn">Create Your Account</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
