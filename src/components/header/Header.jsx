import React, { useEffect, useState } from "react";
import "./header.css";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const signUpAs = (role) => {
    navigate(`/register/${role}`);
  };

  return (
    <div className={`head ${isSticky ? "sticky" : ""}`}>
      <div className="logo">
        <p><img src="/IMG/Logo.png" alt="Logo" /></p>
      </div>
      <div className="nav">
        <p onClick={() => navigate('/')}>Home</p>
        <p onClick={() => navigate("/listings")}>Property</p>
        <p onClick={() => navigate('/about')}>About</p>
      </div>
      <div className="user">
        <p className="burger"><RxHamburgerMenu /></p>
        <p onClick={() => navigate('/private')}><FaRegUser /></p>
        <p
          onMouseOver={() => setDropdown(true)}
          onMouseOut={() => setDropdown(false)}
        >
          Sign Up <k><IoIosArrowDown /></k>
        </p>
        <span onClick={() => navigate('/sign-in')}>Login</span>
        {dropdown && (
          <div
            className="dropCard"
            onMouseOver={() => setDropdown(true)}
            onMouseOut={() => setDropdown(false)}
          >
            <k onClick={() => signUpAs("landlord")}>Landlord</k>
            <k onClick={() => signUpAs("tenant")}>Tenant</k>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
