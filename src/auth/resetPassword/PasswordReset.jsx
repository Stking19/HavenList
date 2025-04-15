import React, { useState } from "react";
import "./passwordreset.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { resetPassword } from "../../config/api";

const PasswordReset = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setIsLoading] = useState(false);

  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleReset = async (e) => {
    e.preventDefault();

    if (!password.trim() || !confirmPassword.trim()) {
      toast.error("Inputs can't be empty");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // if (!strongPasswordRegex.test(password)) {
    //   toast.error("Password must have uppercase, lowercase, numbers and special characters");
    //   return;
    // }

    setIsLoading(true);

    try {
      const response = await resetPassword({ password, confirmPassword }); // assuming this function exists
      toast.success(response.data.message); // assuming proper response
      console.log(response);
      setTimeout(() => {
        navigate("/sign-in");
      }, 3000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

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
            <p className="lasttext">from previously used password</p>
          </div>

          <div className="resetformdetails">
            <div className="forgotpassworddetailwrapper">
              <h2 style={{ color: "#00bcd4", fontSize: "20px", fontWeight: "400" }}>
                Create Password
              </h2>
              <input
                className="resetinputcont"
                type="password"
                name="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="forgotpassworddetailwrapper">
              <h2 style={{ color: "#00bcd4", fontSize: "20px", fontWeight: "400" }}>
                Confirm Password
              </h2>
              <input
                className="resetinputcont"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="continuebuttoncont1">
              <button className="continuebtn" onClick={handleReset}>
                {loading ? "Please wait" : "Reset password"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
