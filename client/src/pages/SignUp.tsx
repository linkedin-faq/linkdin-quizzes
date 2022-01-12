import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/sign-up.scss";

const SignUp = function () {
  const [container, setContainer] = useState<string>("");

  const handleSignUp = () => {
    setContainer("right-panel-active");
  };
  const handleSignIn = () => {
    setContainer("");
  };
  return (
    <div className="sign-up">
      <div className={`container ${container}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <div className="social">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "darkBlue" }}
                />
              </div>
              <div className="social">
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  style={{ color: "crimson" }}
                />
              </div>
              <div className="social">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "blue" }} />
              </div>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <div className="social">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "darkblue" }}
                />
              </div>
              <div className="social">
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  style={{ color: "crimson" }}
                />
              </div>
              <div className="social">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "blue" }} />
              </div>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div>Forgot your password?</div>
            <button type="button" style={{ marginTop: "0.5rem" }}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                type="button"
                className="ghost"
                id="signIn"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                type="button"
                className="ghost"
                id="signUp"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
