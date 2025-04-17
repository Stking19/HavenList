import React from "react";
import { useState } from "react";
import icon from "/IMG/icon.png";
import { CgProfile } from "react-icons/cg";
import "./dashboardheader.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/AuthSlice";

function DashboardHeader({ setActiveTab, profileImage, firstName }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div>
        <div className="profileheader">
          <div className="innerheader">
            <div className="imagewrapper">
              <img src={icon} alt="" />
            </div>

            <div className="headerside">
              <p className="burgers">
                <RxHamburgerMenu onClick={toggleCart} />
              </p>

              {/* Conditionally render profile image */}
              <div className="profileimagewrap">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="profile-image" />
                ) : (
                  <CgProfile size={30} />
                )}
              </div>

              {/* Display first name */}
              <h1>Hi, {firstName}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleCart}>
          ×
        </button>
        <div className="sideNav">
          <p onClick={() => setActiveTab(0)}>
            <span>
              <RxDashboard />
            </span>
            Dashboard
          </p>
          <p onClick={() => setActiveTab(1)}>
            <span>
              <IoHomeOutline />
            </span>
            Post a Property
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
          <p onClick={() => dispatch(logout())}>
            <span>
              <CiLogout />
            </span>
            Sign Out
          </p>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
