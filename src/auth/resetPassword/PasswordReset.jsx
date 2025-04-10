import React from "react";
import "./passwordreset.css";

const PasswordReset = () => {
  return (
    <div>
      <div className="mainbody">
        <div className="pageheader">
          <h1>Reset Password</h1>
        </div>

        <div className="forgotpasswordbody">
          <div className="forgotpasswordtext">
            <div className="textwrapper">
              <h1>Enter the new password</h1>
              <p>Your new password must be different</p>
              <p style={{ marginLeft: "50px" }}>
                from previously used password
              </p>
            </div>
          </div>

          <div className="formdetails">
            <div className="forgotpassworddetailwrapper">
              <h2 style={{ color: "#00bcd4", fontSize: "20px", fontWeight: "400" }}>Create Password</h2>
              <input
                className="resetinputcont"
                type="text"
                placeholder="Create password"
              />
            </div>

            <div className="forgotpassworddetailwrapper">
              <h2 style={{ color: "#00bcd4", fontSize: "20px", fontWeight: "400"}}>
                Confirm Password
              </h2>
              <input
                className="resetinputcont"
                type="text"
                placeholder="Confirm password"
              />
            </div>

            <div className="buttoncont1">
              <button className="continuebtn">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
