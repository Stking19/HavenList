import React, { useEffect, useRef, useState } from "react";
import "./verify.css";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Verify = () => {
  const [timer, setTimer] = useState(60);
  const [isActive, setIsActive] = useState(true);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleResend = () => {
    setIsActive(true);
    setTimer(60);
    setOtp(["", "", "", ""]);
    inputRefs.current[0].focus();
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = async () => {
    const enteredCode = otp.join("");
    if (enteredCode.length < 4) {
      toast.error("Please enter all 4 digits.");
      return;
    }
    console.log("Code sent to backend:", enteredCode);

    try{
      const response = await axios.post(`${API_URL }/reset-landlordpassword/${enteredCode}`, { enteredCode });
      console.log(response)
    }catch(error){
      console.log(error)
  }
};

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="mainbody">
        <div className="fullpageheader">
          <h1>Verify Email</h1>
        </div>
        <div className="codeGet">
          <h2>Get Your Code</h2>
          <p>
            Please enter the 4 digit code <br /> that was sent to your mail
          </p>

          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="otp-input"
              />
            ))}
          </div>

          <button
            onClick={handleResend}
            disabled={isActive}
            style={{
              color: isActive ? "gray" : "",
              cursor: isActive ? "not-allowed" : "",
            }}
          >
            {isActive ? `Resend code in ${timer}` : "Resend Code"}
          </button>
        </div>
        <button className="verify" onClick={handleSubmit}>
          Verify
        </button>
      </div>
    </>
  );
};

export default Verify;