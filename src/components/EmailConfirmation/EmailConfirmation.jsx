import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import emailpicture from "/IMG/Emailpix.png";
import { useNavigate } from "react-router";
import "./emailconfirmation.css";

function EmailConfirmation() {
  const navigate = useNavigate();
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
              <h1>Email Confirmation</h1>
            </div>

            <div className="emailwriteup-cont">
              <p>
                We have sent an email to <span>onuohajoshau@gmail.com</span>{" "}
                to confirm the validity{" "}
              </p>
              <p>
                of our email address. After recieving the email follow the link
                provided
              </p>
              <p>to complete your registration.</p>

              <hr style={{ width: "75%" }} />

              <h3>
                If you do not recieve any email,{" "}
                <span onClick={() => navigate("/forgot-password")}>
                  Resend Confirmation mail.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailConfirmation;
