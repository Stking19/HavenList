import React, { useEffect, useState } from "react";
import "./header.css";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate()

  return (
    <div className={`head ${isSticky ? "sticky" : ""}`}>
      <div className="logo">
        <p>
          <img src="/IMG/Logo.png" alt="" />
        </p>
      </div>
      <div className="nav">
        <p onClick={() => navigate('/')}>Home</p>
        <p onClick={() => navigate("/listings")}>Property</p>
        <p onClick={() => navigate('/about')}>About</p>
      </div>
      <div className="user">
        <p
          onMouseOver={() => setDropdown(true)}
          onMouseOut={() => setDropdown(false)}
        >
          Sign Up{" "}
          <k>
            <IoIosArrowDown />
          </k>
        </p>
        <span onClick={() => navigate('/sign-in')}>Login</span>
        {dropdown ? (
          <div
            className="dropCard"
            onMouseOver={() => setDropdown(true)}
            onMouseOut={() => setDropdown(false)}
          >
            <k onClick={() => navigate('/register')}>Landlord</k>
            <k onClick={() => navigate('/register')}>Tenants</k>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
