import React from "react";
import "./passwordreset.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const PasswordReset = () => {
 const navigate = useNavigate()

  const handleReset = () =>{
    toast.success("Password Reset successfull")
    setTimeout(() => {
      navigate('/sign-in')
    }, 3000)
  }
  return (
    <div>
      <div className="mainbody">
        <div className="pageheader">
          <h1>Reset Password</h1>
        </div>

        <div className="forgotpasswordbody">
          <div className="forgotpasswordtext">
           
              <h1>Enter the new password</h1>
              <p>Your new password must be different</p>
              <p className="lasttext">
                from previously used password
              </p>
           
          </div>

          <div className="resetformdetails">
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

            <div className="continuebuttoncont1">
              <button className="continuebtn" onClick={handleReset}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
