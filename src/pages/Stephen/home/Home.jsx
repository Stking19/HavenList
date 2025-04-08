import React from "react";
import "./home.css";
import SearchBar from "../../../components/searchbar/SearchBar";

const Home = () => {
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
        <div className="upHouse">
          <div className="leftHouse">
            <div className="houseDet">
              <div className="Himg"></div>
              <div className="Hdetails"></div>
            </div>
            <div className="apart"></div>
          </div>
          <div className="rightHouse">
          <div className="houseDet">
            <div className="Himg"></div>
            <div className="Hdetails"></div>
          </div>
          <div className="apart"></div>
          </div>
        </div>
        <div className="downHouse">
          <div className="leftHouse"></div>
          <div className="rightHouse"></div>
        </div>
      </div>
      <div className="more">
        <h1>More Property Listings</h1>
        <div className="our">
          <div className="houseImg"></div>
          <div className="mission"></div>
        </div>
      </div>
      <div className="numbers">

      </div>
      <div className="coming">
        <div className="ekiti"></div>
        <div className="osun"></div>
        <div className="ondo"></div>
      </div>
    </div>
  );
};

export default Home;
