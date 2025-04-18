import React, { useState } from "react";
import "./forgotPassword.css";
import { useNavigate, useParams } from "react-router";
import { forgetPassword } from "../../config/api";
import toast from "react-hot-toast";
import { IoCaretBackCircleSharp } from "react-icons/io5";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loadingScreen, setLoadingScreen] = useState(false);
  const { role } = useParams();

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please input your email");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please input a correct email");
      return;
    }

    setLoadingScreen(true);

    await new Promise((resolve) => setTimeout(resolve, 0));
    try {
      const response = await forgetPassword({ email }, role);
      console.log(response);
      toast.success(response.message)
      setLoadingScreen(false);
      setTimeout(() => {
        navigate(`/api/v1/verify/${role}`);
      }, 4000);
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoadingScreen(false);
      toast.error(response.message)
    }
  };

  return (
    <div>
      <div className="mainbody">
        <p className="goback" onClick={() => navigate(-1)}>
          <IoCaretBackCircleSharp />
        </p>
        <div className="fullpageheader">
          <h1>Forgot Password</h1>
        </div>

        <div className="forgotemailbody">
          <div className="forgotemailtext">
            <h1>Mail Address Here</h1>
            <p>Enter the email address associated</p>
            <p>to your account </p>
          </div>

          <div className="formdetailwrap">
            <div className="forgotpassworddetailwrapper">
              <h2>Email</h2>
              <input
                className="emailcont"
                type="text"
                placeholder="Enter email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="resetemailbtn" onClick={handleForgetPassword}>
              {loadingScreen ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
