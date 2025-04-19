import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import "./successcard.css";
import Loadscreen from "../../loadscreen/Loadscreen";

function SuccessCard() {
  const navigate = useNavigate();
  const reff = localStorage.getItem("transactionId");
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const handlePaymentStatus = async () => {
        setLoading(true);
      try {
        const res = await axios.get(`${API_URL}charges/${reff}`, { headers });
        console.log(res.data.data);
        if (res.data.status === "success") {
           setLoading(false);
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        } else {
          toast.error("Payment Failed");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (reff) {
      handlePaymentStatus();
    }
  }, []);

  return (
    <div className="successcardwrapper">
      {loading ? (
        <div className="uploadOverlay">
            <Loadscreen />
        </div>
      ) : (
        <div className="cardwrap">
          <div className="cardheader">
            <div className="innerheadercardwrap">
              <MdOutlineCancel
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
                size={30}
              />
            </div>
          </div>

          <div className="successicon">
            <img src="/IMG/successcard.png" alt="Success" />
          </div>

          <div className="paymenttextwarp">
            <h4>Payment Successful</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuccessCard;
