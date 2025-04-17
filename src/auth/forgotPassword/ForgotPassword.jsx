import React, { useState } from "react";
import './forgotPassword.css'
import { useNavigate } from "react-router";
import { forgetPassword } from "../../config/api";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [loadingScreen, setLoadingScreen] = useState(false)

  const handleForgetPassword = async(e)=>{
    e.preventDefault();

    if(!email.trim()){
      toast.error("Please input your email")
      return;
    }

    if(!email.includes("@")){
      toast.error("Please input a correct email")
      return;
    }

    setLoadingScreen(true)

    await new Promise((resolve) => setTimeout(resolve, 0));
    try{
      
      const response = await forgetPassword ({email})
      toast.success("Email submitted successfully")
      console.log(response)
      setLoadingScreen(false)
      setTimeout(() =>{
      navigate("/verify")      
    },4000)
      console.log(response)
    }catch(error){
       console.log(error)
       toast.error("invalid credential")
       setLoadingScreen(false)
      
    }

  }

  
  return (
    <div>
      <div className="mainbody">
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
              <button className="resetemailbtn"  onClick={ handleForgetPassword}>
                {loadingScreen ? "Submitting..." : "Submit"}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
