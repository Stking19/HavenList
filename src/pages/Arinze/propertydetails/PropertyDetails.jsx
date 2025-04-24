import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./propertydetails.css";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Modal } from "antd";
import { HashLoader } from "react-spinners";

const API_URL = import.meta.env.VITE_API_URL;

const PropertyDetails = () => {
  const { productId } = useParams();
  const [productD, setProductDetails] = useState({});

  console.log(productId);

  const navigate = useNavigate();


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
  }, [productD]);

  console.log(productD);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productD.listingImage.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productD.listingImage.length) % productD.listingImage.length);
  };

  const [activeTableIndex, setActiveTableIndex] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [openPay, setOpenPay] = useState(false);

  const handleCancelPay = () => {
    setOpenPay(false);
  }

  const handleOpenPay = () => {
    const isloggedIn = localStorage.getItem("token");
    if (!isloggedIn) {
      toast.error("Please login to continue");
      return navigate("/role");
    }
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
          <p>COOL APARTMENT FOR YOU AND YOUR FAMILY</p>

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
              <img src={productD.listingImage?.[currentImageIndex]?.imageUrl} alt="property" />
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
            <p style={{width: "50%"}}>{productD.description}</p>
          </span>

          <div className="propertyDetailSafeTips" style={{padding: "20px"}}>
            <h3>Safety Tips</h3>
            <li>
              Only Make Payments Through the App
            </li>
            <li>
              Use in-App Scheduling for Inspections
            </li>
            <li>Avoid Sharing Personal Contact Details Prematurely</li>
            <li>
              Report Suspicious Behaviour Immediately
            </li>
            <li>
              Meet at the Property Location Only
            </li>
            <li>
              Always Bring a Friend to Inspections
            </li>
            <li>
              Do Not Sign Any Documents Outside the App Process
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

      {/* <div className="modalpropertyDetailCardMobile">
        <h2>N{productD.price}</h2>
        <button
          onClick={handleOpenPay}
          className="propertyDetailRentBtn"
        >
          Rent
        </button>
      </div> */}
    </>
  );
};

export default PropertyDetails;
