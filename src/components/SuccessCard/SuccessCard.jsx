import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./successcard.css";
import Loadscreen from "../../loadscreen/Loadscreen";
import { Modal } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

function SuccessCard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const reff = searchParams.get("reference");
  const token = localStorage.getItem("token");
  const [toggleInspect, setToggleInspect] = useState(false);

  const scheduleOptions = [
    { days: "Monday", timeRange: "10am-4pm" },
    { days: "Tuesday", timeRange: "10am-4pm" },
    { days: "Wednesday", timeRange: "10am-4pm" },
    { days: "Thursday", timeRange: "12am-4pm" },
    { days: "Friday", timeRange: "10am-4pm" },
    { days: "Saturday", timeRange: "12am-4pm" },
  ];

  const handleInspect = () => {
    setToggleInspect(true);
  };

  const handleCancel = () => {
    setToggleInspect(false);
  };

  const [activeTableIndex, setActiveTableIndex] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const handleTableClick = (tabindex) => {
    setActiveTableIndex((prevIndex) =>
      prevIndex === tabindex ? null : tabindex
    );
    setSelectedSchedule(
      tabindex !== activeTableIndex ? scheduleOptions[tabindex] : null
    );
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const [inspect, setInspect] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const tenantId = JSON.parse(localStorage.getItem("id"));
  const listingId = localStorage.getItem("listingId");


  const scheduleListing = async () => {
    setInspect(true)
    try {
      const response = await axios.post(
        `${API_URL}schedule/${tenantId}/${listingId}`,
        selectedSchedule,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success(response?.data?.message)
      setInspect(false)
      setTimeout(() => {
        navigate("/home")
      },3000)
    } catch (error) {
      console.log(error);
      setInspect(false)
      toast.error(error?.response?.data?.message)
    }
  };

  useEffect(() => {
    if (!reff) {
      toast.error("Refrence not found");
    }
    const handlePaymentStatus = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}charges?reference=${reff}`, {
          headers,
        });
        console.log(res);
          setLoading(false);
          setLoadings(true);
          setTimeout(() => {
            handleInspect()
          })
      } catch (error) {
        console.log(error);
        setLoading(false);
        setLoadings(false);
        // setTimeout(() => {
        //   navigate(-2)
        // }, 3000)
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
      ) : null}
      {loadings ? (
        <div>
          <h2>Payment Successfull</h2>{" "}
          <p>
            Thank you for your payment, please click{" "}
            <span
              onClick={handleInspect}
              style={{ color: "blue", cursor: "pointer" }}
            >
              here
            </span>{" "}
            to select a time day for inspection of the property
          </p>
        </div>
      ) : (
        <h2>Payments Failed</h2>
      )}

      <Modal
        open={toggleInspect}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={500}
      >
        <h2>SCHEDULE FOR INSPECTION</h2>
        <p style={{ fontWeight: "500" }}>
          Select a Day and Time you would be available to go for an inspection
          of the property
        </p>
        {scheduleOptions.map((option, index) => (
          <span
            key={index}
            className="inspectText"
            onClick={() => handleTableClick(index)}
            style={{
              backgroundColor: activeTableIndex === index ? "#2F80ED" : "white",
              color: activeTableIndex === index ? "white" : "#00A5CF",
              borderRadius: "20px",
            }}
          >
            <h2>{option.days}</h2>
            <p style={{ fontSize: "16px" }}>{option.timeRange}</p>
          </span>
        ))}
        <button
          className="inspectBtn"
          disabled={selectedSchedule === null}
          onClick={() => scheduleListing(selectedSchedule)}
        >
          {inspect ? "confirming..." : "Inspect"}
        </button>
      </Modal>
    </div>
  );
}

export default SuccessCard;
