import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import emailpicture from "/IMG/Emailpix.png";
import { useNavigate, useParams } from "react-router";
import "./emailconfirmation.css";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const EmailConfirmation =() => {

  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const handleVerify = async () => {
      try {
        const response = await axios.get(`${API_URL}/landlord-verify/${token}`);
        console.log(response);
        navigate("/sign-in/landlord");
      }catch (error) {
        console.error("Error verifying email:", error);
      }
    }
    if (token) {
      handleVerify()
    }
  }, [token]);
  return (
    <div>
      <div className="fullemailwrapper">
        <div className="email-card">
          <div className="email-header">
            <div className="inneremail-cont">
              <MdOutlineCancel size={30} />
            </div>
          </div>

          <div className="innerbody-cont">
            <div className="emailpix-cont">
              <img src={emailpicture} alt="" />
              <h1>Email Verified Successfully</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailConfirmation;
