import React, { useState } from "react";
import picture from "/IMG/loginImage.png";
import "./login.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthSlice"; 
import { loginUser } from "../../config/api";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading ] = useState(false)
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please input your email and password ")
      return;
    }

    if(!email.includes("@")){
      toast.error("Email pathern is incorrect")
      return;
    }


    setLoading(true)
   
    try {

      const userData = await loginUser({ email, password }); 
      dispatch(login(userData)); 
      setLoading(false)

      setTimeout(() =>{
        navigate("/");
      },2000)
      
    } catch (err) {
      console.log(err)
      setLoading(false)
      
    }
  };

  return (
    <div className="mainwrap">
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
                  <input
                    className="logininputcont"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="loginmain">
                  <button className="loginbtnwrap" type="submit">
                  {loading ? "Loading..." : "Login"}
                  </button>

                  <div className="forgotpasswordwrap">
                    
                    <h2
                      onClick={() => navigate("/forgot-password")}
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
