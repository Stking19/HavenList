import React from 'react'
import "./forgotPassword.css"

const ForgotPassword = () => {
  return (
    <div>
      <div className="mainbody">
      <div className="pageheader">
        <h1>Forgot Password</h1>
      </div>

      <div className="forgotpasswordbody">
        <div className="forgotpasswordtext">
        <div className="textwrapper">
          <h1>Enter the new password</h1>
          <p>Your new password must be different</p>
          <p style={{marginLeft: "50px"}}>from previously used password</p>
          </div>
        </div>

        <div className="formdetailwrap">
          
          <div className="forgotpassworddetailwrapper">
            <h2 style={{ color: "#00bcd4",fontSize: "20px" }}>Password</h2>
            <input
              className="resetinputcont"
              type="text"
              placeholder="Create password"
            />
          </div>

          <div className="forgotpassworddetailwrapper">
            <h2 style={{ color: "#00bcd4", fontSize: "20px" }}>Confirm Password</h2>
            <input
              className="resetinputcont"
              type="text"
              placeholder="Confirm password"
            />
          </div>
             
             <div className='buttoncont1'>
          <button className="continuebtn">Continue</button>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ForgotPassword