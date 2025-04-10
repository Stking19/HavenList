import React from "react";
import icon from "../../assets/icon.png";
import profilepicture from "../../assets/profilepix.jpg"
import "./dashboardheader.css";

function DashboardHeader() {
  return (
    <div>
      <div className="profileheader">
        <div className="innerheader">
          <div className="imagewrapper">
            <img src={icon} alt="" />
          </div>

          <div className="headerside">
            <div className="profileimagewrap">
                <img src={profilepicture} alt="" />
            </div>
            <h1 style={{marginLeft: "20px", fontSize: "17px",}}>Hi, Samuel</h1>
            <button className="signoutbtn">SignOut</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
