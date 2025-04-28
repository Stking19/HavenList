import React, { useEffect, useState } from "react";
import icon from "/IMG/icon.png";
import { RxHamburgerMenu, RxDashboard } from "react-icons/rx";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { CiViewList, CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router";
import "./dashboardheader.css";

function DashboardHeader({ setActiveTab }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mystoredImage, setMyStoredImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setMyStoredImage(storedImage);
    }else {
      setMyStoredImage("/IMG/profile-icon.png")
    }
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const name = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="profileheader">
        <div className="innerheader">
          <div className="imagewrapper">
            <img
              src={icon}
              alt="Logo"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="headerside">
            <p className="burgers">
              <RxHamburgerMenu onClick={toggleCart} />
            </p>

            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "100px",
                
              }}

            >
              {mystoredImage ? (
                <img
                  src={mystoredImage}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <p style={{ fontSize: "12px", color: "#333" }}>No Image</p>
              )}
            </div>

            <h1 style={{ marginLeft: "30px" }}>Hi, {name}</h1>
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
