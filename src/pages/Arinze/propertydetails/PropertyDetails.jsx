import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./propertydetails.css";
import {
  FaAngleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Modal } from "antd";

const API_URL = import.meta.env.VITE_API_URL;

const PropertyDetails = () => {
  const { productId } = useParams();
  const [productD, setProductDetails] = useState({});

  console.log(productId);

  const navigate = useNavigate();
  const tenantid = JSON.parse(localStorage.getItem("id"));
  const name = JSON.parse(localStorage.getItem("user"));
  const email = JSON.parse(localStorage.getItem("email"));
  const amount = JSON.parse(localStorage.getItem("amount"));

  const userData = {
    amount,
    name,
    email,
  };
  const landlordid = localStorage.getItem("landlordId");
  const listingId = localStorage.getItem("listingId");
  console.log({ amount });

  const [toggleInspect, setToggleInspect] = useState(false);

  const handleInspect = () => {
    const isloggedIn = localStorage.getItem("token");

    if (!isloggedIn) {
      toast.error("Please login to continue");
      return navigate("/role");
    }
    setToggleInspect(true);
  };

  const handleCancel = () => {
    setToggleInspect(false);
  };

  const handlePayment = async () => {
    const payload = {
      ...userData,
      schedule: selectedSchedule,
    };
    try {
      const res = await axios.post(
        `${API_URL}initialize/${tenantid}/${landlordid}/${listingId}`,
        userData
      );
      console.log(res);
      localStorage.setItem("transactionId", res?.data?.data?.refrence);
      toast.success(res?.data?.message);
      // window.location.href = res?.data?.data?.checkout_url;
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const getProductDetails = async () => {
    try {
      const res = await axios.get(`${API_URL}/getOneListing/${productId}`);
      console.log(res.data.data);
      setProductDetails(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  console.log(productD);

  const images = [
    "/IMG/be948c0b628fbdd1e0788117fb2000a1.jpg",
    "/IMG/f1e72efd74f50f435fd26aac95593895 (1).jpg",
    "/IMG/251d5a5fc1a8245fe0a865f05388083b.jpg",
    "/IMG/02959aaf05749951f238b1cbc0edcc31.jpg",
    "/IMG/f217c589f3dc03cf9e6018c073eb242c.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const [activeTableIndex, setActiveTableIndex] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [openPay, setOpenPay] = useState(false);

  const handleCancelPay = () => {
    setOpenPay(false);
  }

  const handleOpenPay = () => {
    setOpenPay(true);
  }

  const scheduleOptions = [
    { day: "Monday", time: "10am-4pm" },
    { day: "Tuesday", time: "10am-4pm" },
    { day: "Wednesday", time: "10am-4pm" },
    { day: "Thursday", time: "12am-4pm" },
    { day: "Friday", time: "10am-4pm" },
    { day: "Saturday", time: "12am-4pm" },
  ];

  const handleTableClick = (tabindex) => {
    setActiveTableIndex((prevIndex) =>
      prevIndex === tabindex ? null : tabindex
    );
    setSelectedSchedule(
      tabindex !== activeTableIndex ? scheduleOptions[tabindex] : null
    );
  };

  return (
    <>
      <div className="propertyDetailMain">
        <div className="propertyDetailWrapper">
          <h2>COOL APARTMENT FOR YOU AND FAMILY</h2>

          <div className="propertyDetailImageWrapper">
            <span className="propertyDetailImageMain">
              <img src={productD.listingImage?.[0]?.imageUrl} alt="" />
            </span>
            <div className="subImageWrapper">
              <section className="subImage1">
                <span>
                  <img src={productD.listingImage?.[1]?.imageUrl} alt="" />
                </span>
                <span>
                  <img src={productD.listingImage?.[2]?.imageUrl} alt="" />
                </span>
              </section>

              <section className="subImage2">
                <span>
                  <img src={productD.listingImage?.[3]?.imageUrl} alt="" />
                </span>
                <span>
                  <img src={productD.listingImage?.[4]?.imageUrl} alt="" />
                </span>
              </section>
            </div>
          </div>
          <div className="propertyDetailImageMobile">
            <FaChevronLeft onClick={prevImage} className="arrowBtn left" />
            <span className="mobileImageHolder">
              {/* <img src={images[currentImageIndex]} alt="property" / */}
            </span>
            <FaChevronRight onClick={nextImage} className="arrowBtn right" />
          </div>

          <nav>
            <h3>{productD.title}</h3>
            <h3>
              {productD.area},{productD.state}
            </h3>
            <p>
              {productD.bedrooms} Bedrooms, {productD.bathrooms} Bathrooms ,{" "}
              {productD.toilets} Toilets
            </p>
          </nav>

          <p>Hosted by HavenList Homes</p>

          <span
            className="aboutTexts"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3>About this place</h3>
            <p>{productD.description}</p>
          </span>

          <div className="propertyDetailSafeTips">
            <h3>Safety Tips</h3>
            <li>
              Do not make any inspection fee without seeing the agent or
              Landlord.
            </li>
            <li>
              Only pay Rental fee, Sales fee or any upfront payment after you
              verify the Landlord.
            </li>
            <li>Ensure you meet the Agent in an open location.</li>
            <li>
              The Agent does not represent HevanList and HevanList is not liable
              for any monetary <br />
              transaction between you and the Agent.
            </li>
          </div>
          <a
            style={{ fontSize: "20px", marginBottom: "15px" }}
            href="https://docs.google.com/document/d/18EkarRCZfF9mRuQMsEqgeLB_Nja6LvkJAq8KLMWjNmk/edit?usp=sharing"
          >
            Terms Of use
          </a>
        </div>
      </div>

      <div className="modalpropertyDetailCard">
        <h2>
          N{productD.price}
          <small>per Annum</small>
        </h2>
        <div className="propertyDetailCardDate">
          <div className="dateWrapper">
            <span className="propertyDetailCheckIn">
              <p>CHECK-IN</p>
              <p>4/17/2025</p>
            </span>

            <span className="propertyDetailCheckOut">
              <p>CHECK-out</p>
              <p>4/17/2025</p>
            </span>
          </div>
          <section className="propertyDetailCheckOutOption">
            <span>
              <p>CHECK-out</p>
              <p>4/17/2025</p>
            </span>
            <FaAngleRight />
          </section>
        </div>
        <button onClick={handleInspect} className="propertyDetailRentBtn">
          Rent
        </button>
        <p>You won’t be charged extra</p>
        <div className="propertyDetailFeeNot">
          <span>
            <h3>No agent fee</h3>
            <p>N0.00</p>
          </span>

          <span>
            <h3>No service fee</h3>
            <p>N0.00</p>
          </span>
        </div>
        <span className="propertyDetailRentTotal">
          <h3>Total before taxes</h3>
          <p>N{productD.price}</p>
        </span>
      </div>

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
            <h2>{option.day}</h2>
            <p style={{ fontSize: "16px" }}>{option.time}</p>
          </span>
        ))}
        <button
          className="inspectBtn"
          disabled={selectedSchedule === null}
          onClick={handleOpenPay}
        >
          Inspect
        </button>
      </Modal>

      <Modal
        open={openPay}
        onCancel={handleCancelPay}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={500}
      >
        <div className="paymentModal">
        <h2>Make Payment below</h2>
        <p>
          After Making Payment, You Will Receive a Confirmation Mail, to Confirm
          your Payment and the Inspection Day
        </p>
        <button onClick={handlePayment}>Pay With Kora</button>
        </div>
      </Modal>

      <div className="modalpropertyDetailCardMobile">
        <h2>N{productD.price}</h2>
        <button
          onClick={() => navigate("/success")}
          className="propertyDetailRentBtn"
        >
          Rent
        </button>
      </div>
    </>
  );
};

export default PropertyDetails;
