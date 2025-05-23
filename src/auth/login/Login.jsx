import React, { useState } from "react";
import picture from "/IMG/loginImage.png";
import "./login.css";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthSlice";
import { loginUser } from "../../config/api";
import toast from "react-hot-toast";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";
import { IoCaretBackCircleSharp } from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(error);

    const { email, password } = formData;  

    if (!email || !password) {
      toast.error("Please input your email and password ");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Email pattern is incorrect");
      return;
    }

    setLoading(true);

    try {
      const userData = await loginUser({ email, password }); 
      const userId = userData.id;
      localStorage.setItem("id", JSON.stringify(userId));
      console.log(userData);
      dispatch(login(userData)); 
      setLoading(false);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="mainwrap">
      <p className="goback" onClick={() => navigate(-1)}><IoCaretBackCircleSharp /></p>
      <div className="loginwrapper">
        <div className="loginImageWrap">
          <img src={picture} alt="Login" />
        </div>
        <div className="loginContainer">
          <div className="logintextwrap">
            <h1>
              Login in to your <br />
              <span>Account</span>
            </h1>
          </div>

          <div className="loginDetails">
            <form onSubmit={handleLogin}>
              <div className="loginformwrapper">
                <div className="loginformwrap">
                  <h2>Email</h2>
                  <input
                    className="logininputcont"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="loginformwrap">
                  <h2>Password</h2>
                  <div style={{ position: "relative" }}>
                    <input
                      className="logininputcont"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <span
                    className="myeyeicon"
                      onClick={() => setShowPassword(!showPassword)}
                      
                    >
                      {showPassword ? <IoEyeOutline /> : <LuEyeOff />}
                    </span>
                  </div>
                </div>

                <div className="loginmain">
                  <button className="loginbtnwrap" type="submit">
                    {loading ? "Loading..." : "Login"}
                  </button>

                  <div className="forgotpasswordwrap">
                    <h2 className="signWh">
                      Don't have an account? register
                      <h3 className="datSig">
                        <h2
                          onClick={() => navigate("/register/landlord")}
                          style={{
                            textDecoration: "underline",
                            fontSize: "15px",
                            color: "#00bcd4",
                            cursor: "pointer",
                          }}
                        >
                          Landlord
                        </h2>
                        <h2
                          onClick={() => navigate("/register/tenant")}
                          style={{
                            textDecoration: "underline",
                            fontSize: "15px",
                            color: "#00bcd4",
                            cursor: "pointer",
                          }}
                        >
                          Tenant
                        </h2>
                      </h3>
                    </h2>
                    <h2
                      onClick={() => navigate(`/forgot-password/landlord`)}
                      style={{
                        textDecoration: "underline",
                        fontSize: "15px",
                        color: "#00bcd4",
                        cursor: "pointer",
                      }}
                    >
                      Forgot password
                    </h2>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
