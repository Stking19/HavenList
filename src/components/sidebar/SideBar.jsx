import React from "react";
import "./sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router";

const SideBar = ({ setActiveTab }) => {
  const navigate = useNavigate();
  return (
    <div className="side">
      <div className="navi">
        <p onClick={() => setActiveTab(0)}>
          <span>
            <RxDashboard />
          </span>{" "}
          Dashboard
        </p>
        <p onClick={() => setActiveTab(1)}>
          <span>
            <IoHomeOutline />
          </span>
          Post a property
        </p>
        <p onClick={() => setActiveTab(2)}>
          <span>
            <CiViewList />
          </span>
          My Listings
        </p>
        <p onClick={() => setActiveTab(3)}>
          <span>
            <IoPersonOutline />
          </span>
          Profile
        </p>
      </div>
      <div className="log-out">
        <p onClick={() => navigate("/sign-in")}>
          <span>
            <CiLogout />
          </span>
          Log-out
        </p>
      </div>
    </div>
  );
};

export default SideBar;
