import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import "./tenantpropdetails.css";
import { FaAngleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { Modal } from "antd";

const TenantPropDetails = () => {
  const API_URL = "https://heavenlist2-zaz3.onrender.com/api/v1";
  const { productId } = useParams();
  const navigate = useNavigate();

  // Product details and image slider
  const [productD, setProductDetails] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State for tenant and listing information
  const [tenantid, setTenantId] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [amount, setAmount] = useState(null);
  const [landlordid, setLandlordId] = useState(null);
  const [listingId, setListingId] = useState(null);

  const userData = { amount, name, email };

  const [toggleInspect, setToggleInspect] = useState(false);
  const [openPay, setOpenPay] = useState(false);
  const [activeTableIndex, setActiveTableIndex] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const scheduleOptions = [
    { day: "Monday", time: "10am-4pm" },
    { day: "Tuesday", time: "10am-4pm" },
    { day: "Wednesday", time: "10am-4pm" },
    { day: "Thursday", time: "12am-4pm" },
    { day: "Friday", time: "10am-4pm" },
    { day: "Saturday", time: "12am-4pm" },
  ];

  useEffect(() => {
    getProductDetails();

    setTenantId(JSON.parse(localStorage.getItem("id")));
    setName(JSON.parse(localStorage.getItem("user")));
    setEmail(JSON.parse(localStorage.getItem("email")));
    setAmount(JSON.parse(localStorage.getItem("amount")));
    setLandlordId(localStorage.getItem("landlordId"));
    setListingId(localStorage.getItem("listingId"));
  }, []);

  const getProductDetails = async () => {
    try {
      const res = await axios.get(`${API_URL}/getOneListing/${productId}`);
      setProductDetails(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInspect = () => setToggleInspect(true);
  const handleCancel = () => setToggleInspect(false);
  const handleOpenPay = () => setOpenPay(true);
  const handleCancelPay = () => setOpenPay(false);

  const handlePayment = async () => {
    try {
      const payload = { ...userData};
      const res = await axios.post(
        `${API_URL}initialize/${tenantid}/${landlordid}/${listingId}`,
        payload
      );
      localStorage.setItem("transactionId", res?.data?.data?.refrence);
      toast.success(res?.data?.message);
      // window.location.href = res?.data?.data?.checkout_url;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % productD.listingImage?.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + productD.listingImage?.length) %
        productD.listingImage?.length
    );

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
              <img
                src={productD.listingImage?.[currentImageIndex]?.imageUrl}
                alt="property"
              />
            </span>
            <FaChevronRight onClick={nextImage} className="arrowBtn right" />
          </div>

          <nav>
            <h3>{productD.title}</h3>
            <h3>
              {productD.area}, {productD.state}
            </h3>
            <p>
              {productD.bedrooms} Bedrooms, {productD.bathrooms} Bathrooms,{" "}
              {productD.toilets} Toilets
            </p>
          </nav>

          <p>Hosted by HavenList Homes</p>

          <div className="aboutTexts">
            <h3>About this place</h3>
            <p>{productD.description}</p>
          </div>

          <div className="propertyDetailSafeTips">
            <h3>Safety Tips</h3>
            <li>Do not make any inspection fee without seeing the agent or Landlord.</li>
            <li>Only pay Rental fee after you verify the Landlord.</li>
            <li>Meet the Agent in an open location.</li>
            <li>HavenList is not liable for any monetary transactions with the Agent.</li>
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
          <small> per Annum</small>
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
            After Making Payment, You Will Receive a Confirmation Mail, to
            confirm your Payment and the Inspection Day
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

export default TenantPropDetails;
