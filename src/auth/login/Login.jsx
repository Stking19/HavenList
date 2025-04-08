import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div>

<div className="mainwrap">
      <div className="loginwrapper">
        <div className="loginImageWrap"></div>
        <div className="loginContainer">
          <div className="logintextwrap">
            <h1>Login in to your <br /><span style={{marginLeft: "125px"}}>Account</span></h1>
           
           
           
          </div>

          <div className="loginDetails">

            <form>
              <div className="loginformwrap">
                {/* Username Field */}
                <div className="loginformwrap">
                  <h2>Email</h2>
                  <input className='logininputcont' type="text" placeholder="Enter email" />
                </div>

                {/* Email Field */}
                <div className="loginformwrap">
                  <h2 style={{marginTop: "40px"}}>Password</h2>
                  <input className='logininputcont' type="password" placeholder="Enter password" />
                </div>

                {/* Signup Button */}
                <div className="main">
                  <button className="loginbtnwrap" type="submit">
                   Login
                  </button>
                </div>

                {/* Login Link */}
                <div className="forgotpasswordwrap">
                <h2 style={{textDecoration: "underline", marginTop: "60px", fontSize: "30px", fontFamily: "sans-serif"}}>Forgot password</h2>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Login