import React, { useEffect, useState } from "react";
import "./header.css";
import { IoIosArrowDown } from "react-icons/io";

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

  return (
    <div className={`head ${isSticky ? "sticky" : ""}`}>
      <div className="logo">
        <p>
          <img src="/IMG/Logo.png" alt="" />
        </p>
      </div>
      <div className="nav">
        <p>Home</p>
        <p>Property</p>
        <p>Help</p>
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
        <span>Login</span>
        {dropdown ? (
          <div
            className="dropCard"
            onMouseOver={() => setDropdown(true)}
            onMouseOut={() => setDropdown(false)}
          >
            <k>Landlord</k>
            <k>Tenants</k>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
