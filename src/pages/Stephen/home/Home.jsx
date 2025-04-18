import React, { useEffect, useState } from "react";
import "./home.css";
import SearchBar from "../../../components/searchbar/SearchBar";
import { IoBedOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { LuBath } from "react-icons/lu";
import { PiToiletLight } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


const Home = () => {
  const [allListings, setAllListings] = useState([]);
  const [details, setDetails] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true });
  const navigate = useNavigate()

  const handleDetails = (house) => {
    localStorage.setItem('listingId', house.id)
    localStorage.setItem('landlordId', house.landlordId)
    localStorage.setItem('amount', house.price)
    navigate(`/propertydetails/${house.id}`)
  }

  const getAllListing = async () => {
    try {
      const res = await axios.get(`${API_URL}/getAllListings`)
      console.log("this is what am loking for ",res)
      setAllListings(res.data.data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllListing()
  }, [])

  // console.log(allListings)

  return (
    <div className="home">
      <div className="heroPage">
        <h1>FIND YOUR PERFECT HOME</h1>
        <div className="carouselWrap">
        <div className="carousel-content">
          <div className="carouselText">
            <h3>Verified Listing. Transparent Prices. Happy Homes.</h3>
          </div>
          <div className="carouselText">
            <h3>Verified Listing. Transparent Prices. Happy Homes.</h3>
          </div>
        </div>
        </div>
        <SearchBar />
      </div>
      <div className="aboutIc"></div>
      <div className="properties">
        <div className="HouseList">
          <div className="houseWrap">
            {allListings?.map((house, index) => (
              <>
              {console.log(house.listingImage?.[0]?.imageUrl)}
                {details === index ? (
                  <div
                    className="Houses"
                    key={index}
                  >
                    <div className="houseDet">
                      <div className="imgWrap">
                        <div className="Himg" onClick={() => handleDetails(house)}>
                          <img src={house.listingImage?.[0]?.imageUrl} alt="listing preview" />
                        </div>
                      </div>
                      <div className="Hdetails">
                        <h3 onClick={() => handleDetails(house)}>{house.title}</h3>
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
                      <p className="icon" onClick={() => setDetails(null)}>
                        <FiPlus />
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="houseCards" >
                    <div className="imgWrap">
                      <div className="Himg" onClick={() => handleDetails(house)}>
                        <img src={house.Image} alt="" />
                      </div>
                    </div>
                    <div className="Hdetails">
                      <h3 onClick={() => handleDetails(house)}>{house.title}</h3>
                    </div>
                    <div className="butt">
                      <p className="icon" onClick={() => setDetails(index)}>
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
          <div className="houseImgWrap">
            <div className="houseImg">
              <div className="see">
                <button onClick={() => navigate('/listings')}>See more</button>
              </div>
            </div>
          </div>
          <div className="mission">
            <div className="design"></div>
            <div className="upDesign">
              <div className="cardi">
                <h3>HavenList</h3>
                <p>
                  To make Nigeria the first Afican country where: Tenants save
                  #500000+ annualy to avoid hike agent commision
                </p>
              </div>
              <div className="cardiS">
                <h3>Our Mission</h3>
                <p>
                  To empower Nigerians with a one stop digital solution for
                  finding, renting and managing properties - backed by verified
                  listings, legal support and cutting-edge tools
                </p>
              </div>
            </div>
            <div className="downDesign">
              <div className="cardi">
                <h3>Our Story</h3>
                <p>
                  A team of landlords, tech experts and former tenants who
                  experienced Lagos' rental chaos first hand. Today we have
                  helped 10,000+ users find their perfect home or ideal tenants.
                </p>
              </div>
              <div className="cardiS">
                <h3>Testimony</h3>
                <p>
                  Join the thousands of satisfied landlords and tenants who now
                  rent with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="numbers" ref={ref}>
        <div className="num">
          <h1>{inView && <CountUp end={17813} duration={2} />}</h1>
          <p>Rented Out</p>
        </div>
        <div className="num">
          <h1>{inView && <CountUp end={127533} duration={2} />}</h1>
          <p>Property Listed</p>
        </div>
        <div className="num">
          <h1>{inView && <CountUp end={304} duration={2} />}</h1>
          <p>Areas Covered</p>
        </div>
      </div>
      <div className="coming">
        <h3>Coming Soon</h3>
        <div className="states">
          <div className="ekiti"></div>
          <div className="osun"></div>
          <div className="ondo"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
