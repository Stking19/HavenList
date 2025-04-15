import React, { useState } from "react";
import signpic from "/IMG/loginImage.png";
import "./signup.css";
import { useNavigate } from "react-router";
import { signup } from "../../config/api"; 

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

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
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true)
      await signup({ fullName, email, password, confirmPassword });
      setLoading(false)

      setTimeout(() =>{
        navigate("/sign-in");
      },2000)
       
    } catch (err) {
      console.log(err)
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

                <div className="signuppasswordmwrap" style={{ width: "100%", position: "relative" }}>
                  <h2 style={{ color: "#00bcd4" }}>Create Password</h2>
                  <input
                    className="signupinputcont"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="usernameormwrap" style={{ width: "100%", position: "relative" }}>
                  <h2 style={{ color: "#00bcd4" }}>Confirm Password</h2>
                  <input
                    className="signupinputcont"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

               

                <div className="main">
                  <button className="btnwrap" type="submit">
                   {loading ? "Registering..." : "Register"}
                  </button>
                </div>

                <div className="accountwrap">
                  <h3>Already have an account?</h3>
                  <h3
                    onClick={() => navigate("/sign-in")}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      color: "#00bbd4a9",
                    }}
                  >
                    Login
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
