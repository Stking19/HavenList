import React, { useEffect, useState } from "react";
import "./verify.css";

const Verify = () => {
  const [timer, setTimer] = useState(60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const handleResend = () => {
    setIsActive(true);
    setTimer(60);
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
        <button className="verify">Verify</button>
      </div>
    </>
  );
};

export default Verify;
