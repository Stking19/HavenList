import React, { useState } from "react";
import "./sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/AuthSlice";

const SideBar = ({ setActiveTab }) => {
  const dispatch = useDispatch()
  const [activeNav, setActiveNav] = useState(0)

  const handleActive = () => {
    setActiveTab(0)
    setActiveNav(0)
  }
  const handleActive2 = () => {
    setActiveTab(1)
    setActiveNav(1)
  }
  const handleActive3 = () => {
    setActiveTab(2)
    setActiveNav(2)
  }
  const handleActive4 = () => {
    setActiveTab(3)
    setActiveNav(3)
  }
  return (
    <div className="side">
      <div className="navi">
        <p onClick={handleActive} style={{color: activeNav === 0 ? "blue" : null}}>
          <span>
            <RxDashboard />
          </span>{" "}
          Dashboard
        </p>
        <p onClick={handleActive2} style={{color: activeNav === 1 ? "blue" : null}}>
          <span>
            <IoHomeOutline />
          </span>
          Post a property
        </p>
        <p onClick={handleActive3} style={{color: activeNav === 2 ? "blue" : null}}>
          <span>
            <CiViewList />
          </span>
          My Listings
        </p>
        <p onClick={handleActive4} style={{color: activeNav === 3 ? "blue" : null}}>
          <span>
            <IoPersonOutline />
          </span>
          Profile
        </p>
      </div>
      <div className="log-out">
        <p onClick={() => dispatch(logout())}>
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
