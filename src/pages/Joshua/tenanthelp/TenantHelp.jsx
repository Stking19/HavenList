import React from "react";
import "./tenanthelp.css";
import { useNavigate } from "react-router";

const TenantHelp = () => {
  const navigate = useNavigate()
  return (
    <div className="helpfulwrap">
      <div className="helpcardwrapper">
        <div className="innerhelpcard">
          <div className="imageholder">
            <img src="" alt="" />
          </div>

          <div className="helptext">
            <h4>Are you facing any problem?</h4>
            <p>Our support team will reach out to you as soon.</p>
          </div>

          <div className="helpcontactcontainer">
              <p>Email- emekaobi123@gmail.com</p>
              <p>Phone- 08199967356</p>
          </div>

          <div className="helpbuttonwrap">
            <button className="helpbtn" onClick={()=> navigate('/home')}>Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantHelp;