import React, { useEffect, useState } from "react";
import "./header.css";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { TbHomeStats } from "react-icons/tb";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { PiSignIn } from "react-icons/pi";
import { logout } from "../../redux/slices/AuthSlice";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { LuNotebookText } from "react-icons/lu";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRole, setIsRole] = useState(false);
  const [isRoleL, setIsRoleL] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHeader = !!
  localStorage.getItem("token", "user");

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
  const loginAs = (role) => {
    navigate(`/sign-in/${role}`);
  };
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const logoust = () => {
    dispatch(logout());
    window.location.reload();
  }
  return (
    <>
      {handleHeader ? (
        <>
          <div className={`head ${isSticky ? "sticky" : ""}`}>
            <div className="logo">
              <p>
                <img src="/IMG/Logo.png" alt="Logo" />
              </p>
            </div>
            <div className="nav">
              <p onClick={() => navigate("/")}>Home</p>
              <p onClick={() => navigate("/listings")}>Property</p>
              <p onClick={() => navigate("/about")}>About Us</p>
              <p onClick={() => navigate("/help")}>Help</p>
            </div>
            <div className="user">
              <p className="burger">
                <RxHamburgerMenu onClick={toggleCart} />
              </p>
              <p onClick={() => navigate("/private")}>
                <FaRegUser />
              </p>
              <span onClick={logoust}>Log Out</span>
            </div>
          </div>

          <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={toggleCart}>
              ×
            </button>
            <div className="sideNav">
              <p onClick={() => navigate("/")}>
                <span>
                  <AiOutlineHome />
                </span>
                Home
              </p>
              <p onClick={() => navigate("/listings")}>
                <span>
                  <TbHomeStats />
                </span>
                Property
              </p>
              <p onClick={() => navigate("/about")}>
                <span>
                  <LuNotebookText />
                </span>
                About Us
              </p>
              <p onClick={() => navigate("/help")}>
                <span>
                  <FaRegCircleQuestion />
                </span>
                Help
              </p>
              <p onClick={() => navigate("/private")}>
                <span>
                <FaRegUser />
                </span>
                Profile
              </p>
              <p onClick={logoust}>
                <span>
                  <CiLogout />
                </span>
                Log Out
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`head ${isSticky ? "sticky" : ""}`}>
            <div className="logo">
              <p>
                <img src="/IMG/Logo.png" alt="Logo" />
              </p>
            </div>
            <div className="nav">
              <p onClick={() => navigate("/")}>Home</p>
              <p onClick={() => navigate("/listings")}>Property</p>
              <p onClick={() => navigate("/help")}>Help</p>
            </div>
            <div className="user">
              <p className="burger">
                <RxHamburgerMenu onClick={toggleCart} />
              </p>
              <p onClick={() => navigate("/private")}>
                <FaRegUser />
              </p>
              <p
                onMouseOver={() => setDropdown(true)}
                onMouseOut={() => setDropdown(false)}
              >
                Sign Up{" "}
                <k>
                  <IoIosArrowDown />
                </k>
              </p>
              <span onClick={() => navigate(`/role`)}>Login</span>
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

          <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={toggleCart}>
              ×
            </button>
            <div className="sideNav">
              <p onClick={() => navigate("/")}>
                <span>
                  <AiOutlineHome />
                </span>
                Home
              </p>
              <p onClick={() => navigate("/listings")}>
                <span>
                  <TbHomeStats />
                </span>
                Property
              </p>
              <div className="dropSide">
                <p onClick={() => setIsRole(!isRole)}>
                  <span>
                    <FaRegUser />
                  </span>
                  Sign up{" "}
                  <k>
                    <IoIosArrowDown />
                  </k>
                </p>
                {isRole ? (
                  <>
                    <j onClick={() => signUpAs("landlord")}>Landlord</j>
                    <j onClick={() => signUpAs("tenant")}>Tenant</j>
                  </>
                ) : null}
              </div>
              <div className="dropSide">
                <p onClick={() => setIsRoleL(!isRoleL)}>
                  <span>
                    <PiSignIn />
                  </span>
                  Login
                  <k>
                    <IoIosArrowDown />
                  </k>
                </p>
                {isRoleL ? (
                  <>
                    <j onClick={() => loginAs("landlord")}>Landlord</j>
                    <j onClick={() => loginAs("tenant")}>Tenant</j>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
