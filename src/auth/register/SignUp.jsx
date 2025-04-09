import React from 'react'
import signpic from "../../assets/loginImage.png"
import "./signup.css"

const SignUp = () => {
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
            Lagos for
            <span style={{ marginLeft: "10px", color: " #00bcd4" }}>
              Exclusive discount
            </span>
          </h1>
          <h1>
            on{" "}
            <span style={{ marginLeft: "3px", color: " #00bcd4" }}>
              Agents Fees
            </span>
          </h1>
        </div>

        <div className="signupDetails">
          <h1 style={{marginLeft: "18px", fontSize: "50px"}}>Register</h1>

          <form>
            <div className="formwrap">
              
              <div className="signupformwrap">
                <h2>Full Name</h2>
                <input className= "signupinputcont" type="text" placeholder="Enter username" />
              </div>

              
              <div className="signupemailformwrap">
                <h2>Email</h2>
                <input className= "signupinputcont" type="text" placeholder="Enter email" />
              </div>

              
              <div
                className="signuppasswordmwrap"
                style={{ width: "100%", position: "relative", marginTop: "20px" }}
              >
                <h2 style={{color: " #00bcd4", marginTop: "20px"}}>Create Password</h2>
                <div style={{ width: "100%", position: "relative" }}>
                  <input className= "signupinputcont" type="password" placeholder="Enter password" />
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "80px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    
                  </span>
                </div>
              </div>

              <div
                className="usernameormwrap"
                style={{ width: "100%", position: "relative" }}
              >
                <h2 style={{ color: " #00bcd4" }}>Confirm Password</h2>
                <div style={{ width: "100%", position: "relative" }}>
                  <input className= "signupinputcont" type="password" placeholder="Confirm password" />
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "80px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    
                  </span>
                </div>
              </div>
              
              <div className="main">
                <button className="btnwrap" type="submit">
                  Register
                </button>
              </div>
             
              <div className="accountwrap">
                <h3>Already have an account?</h3>
                <h3 style={{ cursor: "pointer", textDecoration: "underline", fontWeight: "bold"}}>Login</h3>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp