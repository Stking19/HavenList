import React, { useEffect } from "react";
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
import { useNavigate } from "react-router";


function DashboardHeader({ setActiveTab, profileImage,}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [mystoredImage, setMyStoredImage] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(()=>{
     setMyStoredImage(true)
  },[])

  const name = JSON.parse(localStorage.getItem("user"))
  const storedImage = localStorage.getItem("profileImage")
  
  return (
    <>
      <div>
        <div className="profileheader">
          <div className="innerheader">
            <div className="imagewrapper">
              <img src={icon} alt="" onClick={() => navigate("/")} />
            </div>

            <div className="headerside">
              <p className="burgers">
                <RxHamburgerMenu onClick={toggleCart} />
              </p>

              {/* <div className="profileimagewrap">
                {mystoredImage ? (
                  <img src={storedImage} alt className="profile-image" />
                ) : (
                  <CgProfile size={30} />
                )}
              </div> */}

              <h1 style={{marginLeft: "130px"}}>Hi, {name}</h1>
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
