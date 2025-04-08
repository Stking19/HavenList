import React, { useState } from "react";
import "./home.css";
import SearchBar from "../../../components/searchbar/SearchBar";
import { IoBedOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { LuBath } from "react-icons/lu";
import { PiToiletLight } from "react-icons/pi";

const Home = () => {
  const houseDetails = [
    {
      Image: "/IMG/7e97959ce4d2d821a82d31013938681b.png",
      title: "2 Bedroom Flat For Rent",
      location: "6th Avenue Amowo-Odofin, Festac, Lagos.",
      description: "Well gated with up to six cars parking space",
      price: "2M",
    },
    {
      Image: "/IMG/18a776fbd7b7728623b847ca8f5b2235.png",
      title: "2 Bedroom Flat For Rent",
      location: "6th Avenue Amowo-Odofin, Festac, Lagos.",
      description: "Well gated with up to six cars parking space",
      price: "2M",
    },
    {
      Image: "/IMG/e3d08db789c3f2e757b389cf48f574d5.png",
      title: "2 Bedroom Flat For Rent",
      location: "6th Avenue Amowo-Odofin, Festac, Lagos.",
      description: "Well gated with up to six cars parking space",
      price: "2M",
    },
    {
      Image: "/IMG/21532fe72b50be348923d3076f854b57.png",
      title: "2 Bedroom Flat For Rent",
      location: "6th Avenue Amowo-Odofin, Festac, Lagos.",
      description: "Well gated with up to six cars parking space",
      price: "2M",
    },
  ];

  const [details, setDetails] = useState(null);
  return (
    <div className="home">
      <div className="heroPage">
        <h1>FIND YOUR PERFECT HOME</h1>
        <h3>Verified Listing. Transparent Prices. Happy Homes.</h3>
        <SearchBar />
      </div>
      <div className="aboutIc">
        <div className="partL"></div>
        <div className="partL"></div>
        <div className="partL"></div>
        <div className="partL"></div>
        <div className="partL"></div>
        <div className="partL"></div>
      </div>
      <div className="properties">
        <div className="HouseList">
          <div className="houseWrap">
            {houseDetails.map((house, index) => (
              <>
                {details === index ? (
                  <div className="Houses" key={index} onClick={() => setDetails(null)}>
                    <div className="houseDet" >
                      <div className="imgWrap">
                        <div className="Himg">
                          <img src={house.Image} alt="" />
                        </div>
                      </div>
                      <div className="Hdetails">
                        <h3>{house.title}</h3>
                        <p>{house.location}</p>
                        <p>{house.description}</p>
                        <span>
                          {house.price} <p>per annum</p>
                        </span>
                      </div>
                    </div>
                    <div className="apart">
                      <div className="bed">
                      <p>
                        <IoBedOutline />
                      </p>
                      <span>2 Bedrooms</span>
                      </div>
                      <div className="bed">
                      <p>
                        <LuBath />
                      </p>
                      <span>2 Bathrooms</span>
                      </div>
                      <div className="bed">
                      <p>
                        <PiToiletLight />
                      </p>
                      <span>3 Toilets</span>
                      </div>
                      <p className="icon">
                        <FiPlus />
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="houseCards" onClick={() => setDetails(index)}>
                    <div className="imgWrap">
                      <div className="Himg">
                        <img src={house.Image} alt="" />
                      </div>
                    </div>
                    <div className="Hdetails">
                      <h3>{house.title}</h3>
                    </div>
                    <div className="butt">
                      <p className="icon" >
                        <FiPlus />
                      </p>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="more">
        <h1>More Property Listings</h1>
        <div className="our">
          <div className="houseImg"></div>
          <div className="mission"></div>
        </div>
      </div>
      <div className="numbers"></div>
      <div className="coming">
        <div className="ekiti"></div>
        <div className="osun"></div>
        <div className="ondo"></div>
      </div>
    </div>
  );
};

export default Home;
