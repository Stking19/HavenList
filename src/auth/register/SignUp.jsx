import React, { useState } from "react";
import signpic from "/IMG/loginImage.png";
import "./signup.css";
import { useNavigate, useParams } from "react-router";
import { signup } from "../../config/api"; 
import toast from "react-hot-toast";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";

const SignUp = () => {
  const navigate = useNavigate();
  const { role } = useParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Separate state for each password visibility toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await signup({ fullName, email, password, confirmPassword }, role);
      setLoading(false);

      setTimeout(() => {
        navigate(`/sign-in/${role}`);
      }, 2000);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="mainwrap">
      <div className="signupwrapper">
        <div className="signupImageWrap">
          <img src={signpic} alt="Sign Up" />
        </div>
        <div className="signupContainer">
          <div className="signuptextwrap">
            <h1>Register on HavenList</h1>
            <h1>
              Lagos for <span style={{ color: "#00bcd4" }}>Exclusive Discount</span>
            </h1>
            <h1>
              On <span style={{ color: "#00bcd4" }}>Agent fees</span>
            </h1>
          </div>

          <div className="signupDetails">
            <form onSubmit={handleSubmit}>
              <div className="signupformwrapper">
                <div className="signupformwrap">
                  <h2>Full Name</h2>
                  <input
                    className="signupinputcont"
                    type="text"
                    name="fullName"
                    placeholder="Enter username"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="signupemailformwrap">
                  <h2>Email</h2>
                  <input
                    className="signupinputcont"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="signuppasswordmwrap" style={{ width: "100%", position: "relative" }}>
                  <h2 style={{ color: "#00bcd4" }}>Create Password</h2>
                  <input
                    className="signupinputcont"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                    // style={{
                    //   position: "absolute",
                    //   right: "90px",
                    //   top: "70%",
                    //   transform: "translateY(-50%)",
                    //   cursor: "pointer",
                    //   fontSize: "18px",
                    //   color: "#333",
                    // }}
                  >
                    {showPassword ?  <IoEyeOutline />: <LuEyeOff /> }
                  </span>
                </div>

                {/* Confirm Password Field */}
                <div className="usernameormwrap" style={{ width: "100%", position: "relative" }}>
                  <h2 style={{ color: "#00bcd4" }}>Confirm Password</h2>
                  <input
                    className="signupinputcont"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <span className="eye-icon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    // style={{
                    //   position: "absolute",
                    //   right: "90px",
                    //   top: "70%",
                    //   transform: "translateY(-50%)",
                    //   cursor: "pointer",
                    //   fontSize: "18px",
                    //   color: "#333",

                    // }}
                  >
                    {showConfirmPassword ? <IoEyeOutline />: <LuEyeOff />}
                  </span>
                </div>

                <div className="main">
                  <button className="btnwrap" type="submit">
                    {loading ? "Registering..." : "Register"}
                  </button>
                </div>

                <div className="accountwrap">
                  <h3>Already have an account? Login</h3>
                  <h3
                    onClick={() => navigate("/sign-in/landlord")}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      color: "#00bbd4a9",
                    }}
                  >
                    Landlord
                  </h3>
                  or
                  <h3
                    onClick={() => navigate("/sign-in/tenant")}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      color: "#00bbd4a9",
                    }}
                  >
                    Tenant
                  </h3>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
