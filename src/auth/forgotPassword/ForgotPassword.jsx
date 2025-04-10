import React from "react";
import './forgotPassword.css'
import { useNavigate } from "react-router";

const ForgotPassword = () => {

  const navigate = useNavigate()
  return (
    <div>
      <div className="mainbody">
        <div className="fullpageheader">
          <h1>Forgot Password</h1>
        </div>

        <div className="forgotemailbody">
          <div className="forgotemailtext">
            <div className="textwrap">
              <h1>Mail Address Here</h1>
              <p>Enter the email address associated</p>
              <p style={{ marginLeft: "80px" }}>to your account </p>
            </div>
          </div>

          <div className="formdetailwrap">
            <div className="forgotpassworddetailwrapper">
              <h2>Email</h2>
              <input
                className="emailcont"
                type="text"
                placeholder="Enter email here"
              />
            </div>

            <div className="buttoncontwrap">
              <button className="resetemailbtn"  onClick={() => navigate('/reset-password')}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
