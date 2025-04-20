import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import "./propertydetails.css";
import {
  FaAngleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { Modal } from "antd";
import { HashLoader } from "react-spinners";

const PropertyDetails = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  
  const { productId } = useParams();
  const [productD, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [tenantid, setTenantId] = useState(null);
  console.log(tenantid)
  const [landlordid, setLandlordId] = useState(null);
  const [listingId, setListingId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");


  useEffect(() => {
    getProductDetails();
    setTenantId(JSON.parse(localStorage.getItem("id")));
    setName(JSON.parse(localStorage.getItem("user")));
    setEmail(JSON.parse(localStorage.getItem("email")));
    setAmount(JSON.parse(localStorage.getItem("amount")));
    setLandlordId(localStorage.getItem("landlordId"));
    setListingId(localStorage.getItem("listingId"));
  }, []);


  const handleTableClick = (index) => {
    const isActive = index === activeTableIndex;
    setActiveTableIndex(isActive ? null : index);
    setSelectedSchedule(isActive ? null : scheduleOptions[index]);
    userData.schedule = isActive ? null : scheduleOptions[index];
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

          <span
            className="aboutTexts"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h3>About this place</h3>
            <p style={{width: "50%"}}>{productD.description}</p>
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
              The Agent does not represent HavenList and HavenList is not liable
              for any monetary <br />
              transaction between you and the Agent.
            </li>
          </div>
          <a
            style={{ fontSize: "20px", marginBottom: "15px" }}
            href="https://docs.google.com/document/d/18EkarRCZfF9mRuQMsEqgeLB_Nja6LvkJAq8KLMWjNmk/edit?usp=sharing"
          >
            Terms Of Use
          </a>
        </div>
      </div>

      <div className="modalpropertyDetailCardMobile">
        <h2>N{productD.price}</h2>
        <button
          onClick={handleOpenPay}
          className="propertyDetailRentBtn"
        >
          Rent
        </button>
      </div>
    </>
  );
};

export default PropertyDetails;
