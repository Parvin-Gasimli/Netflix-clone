import { Email } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt=""
          />
          <button className="loginButton"> Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies,Tv showes,and more</h1>
        <h2>Watch anywgere,Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or resart your membership
        </p>
        {!email ?  (
          <div className="input">
            <input placeholder="Email Address" type="email" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              {" "}
              Get Started{" "}
            </button>
          </div>
        ):
        (
          <form className="input">
            <input placeholder="Password " type="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
            Start
            </button>
          </form>
        )
      
      }
      </div>
    </div>
  );
};

export default Register;
