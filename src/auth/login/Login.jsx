import React from "react";
import picture from "/IMG/loginImage.png";
import "./login.css";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="mainwrap">
        <div className="loginwrapper">
          <div className="loginImageWrap">
            <img src={picture} alt="" />
          </div>
          <div className="loginContainer">
            <div className="logintextwrap">
              <h1>
                Login in to your <br />
                <span style={{ marginLeft: "53px" }}>Account</span>
              </h1>
            </div>

            <div className="loginDetails">
              <form>
                <div className="loginformwrapper">
                  <div className="loginformwrap">
                    <h2>Email</h2>
                    <input
                      className="logininputcont"
                      type="text"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="loginformwrap">
                    <h2>Password</h2>
                    <input
                      className="logininputcont"
                      type="password"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="main">
                    <button className="loginbtnwrap" type="submit">
                      Login
                    </button>

                    <div className="forgotpasswordwrap">
                      <p>
                        Don't have an account?{" "}
                        <span onClick={() => navigate("/register")}>
                          Sign Up
                        </span>
                      </p>
                      <h2
                        onClick={() => navigate("/forgot-password")}
                        style={{
                          textDecoration: "underline",
                          fontSize: "15px",
                          color: "#00bcd4",
                          cursor: "pointer",
                        }}
                      >
                        Forgot password
                      </h2>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
