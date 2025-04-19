import React, { useState } from "react";
import "./passwordreset.css";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { resetPassword } from "../../config/api";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";
import { IoCaretBackCircleSharp } from "react-icons/io5";

const PasswordReset = () => {
  const navigate = useNavigate();
  const { otp, role } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    setIsLoading(true);

    try {
      const response = await resetPassword({ password, confirmPassword, role });
      toast.success(response.data.message);
      setTimeout(() => {
        navigate(`/sign-in/${role}`);
      }, 3000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mainbody">
        <p className="goback" onClick={() => navigate(-1)}><IoCaretBackCircleSharp /></p>
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
            <div className="forgotpassworddetailwrapper" style={{ position: "relative" }}>
              <h2 style={{ color: "#00bcd4", fontSize: "20px", fontWeight: "400" }}>
                Create Password
              </h2>
              <input
                className="resetinputcont"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOutline />: <LuEyeOff />  }
              </span>
            </div>

            <div className="forgotpassworddetailwrapper" style={{ position: "relative" }}>
              <h2 style={{ color: "#00bcd4", fontSize: "20px", fontWeight: "400" }}>
                Confirm Password
              </h2>
              <input
                className="resetinputcont"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <IoEyeOutline /> :<LuEyeOff />  }
              </span>
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
