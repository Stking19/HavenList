import React from "react";
import signpic from "/IMG/loginImage.png";
import "./signup.css";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="mainwrap">
      <div className="signupwrapper">
        <div className="signupImageWrap">
          <img src={signpic} alt="" />
        </div>
        <div className="signupContainer">
          <div className="signuptextwrap">
            <h1>Register on HavenList</h1>
            <h1>
              Lagos for{" "}
              <span style={{ color: "#00bcd4" }}>Exclusive Discount</span>
            </h1>
            <h1>
              On <span style={{ color: "#00bcd4" }}>Agent fees</span>
            </h1>
          </div>

          <div className="signupDetails">
            <h1 style={{ fontSize: "20px" }}>Register</h1>

            <form>
              <div className="signupformwrapper">
                <div className="signupformwrap">
                  <h2>Full Name</h2>
                  <input
                    className="signupinputcont"
                    type="text"
                    placeholder="Enter username"
                  />
                </div>

                <div className="signupemailformwrap">
                  <h2>Email</h2>
                  <input
                    className="signupinputcont"
                    type="text"
                    placeholder="Enter email"
                  />
                </div>

                <div
                  className="signuppasswordmwrap"
                  style={{ width: "100%", position: "relative" }}
                >
                  <h2 style={{ color: " #00bcd4" }}>Create Password</h2>
                  <div style={{ width: "100%", position: "relative" }}>
                    <input
                      className="signupinputcont"
                      type="password"
                      placeholder="Enter password"
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "80px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    ></span>
                  </div>
                </div>

                <div
                  className="usernameormwrap"
                  style={{ width: "100%", position: "relative" }}
                >
                  <h2 style={{ color: " #00bcd4" }}>Confirm Password</h2>
                  <div style={{ width: "100%", position: "relative" }}>
                    <input
                      className="signupinputcont"
                      type="password"
                      placeholder="Confirm password"
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "80px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    ></span>
                  </div>
                </div>

                <div className="main">
                  <button className="btnwrap" type="submit">
                    Register
                  </button>
                </div>

                <div className="accountwrap">
                  <h3>Already have an account?</h3>
                  <h3
                    onClick={() => navigate("/sign-in")}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      color: "#00bbd4a9",
                    }}
                  >
                    Login
                  </h3>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
