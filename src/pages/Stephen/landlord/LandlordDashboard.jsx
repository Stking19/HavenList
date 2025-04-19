import React, { useEffect, useState } from "react";
import "./landlorddashboard.css";
import SideBar from "../../../components/sidebar/SideBar";
import { IoHomeOutline } from "react-icons/io5";
import { TbHandClick } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import ProfilePage from "../../Joshua/ProfilePage/ProfilePage";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import LandlordPropertyUpload from "../../Arinze/LandlordPropertyUpload";
import LandLordListing from "../../Arinze/LandLordListing";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

const LandlordDashboard = () => {

  const landlordId = JSON.parse(localStorage.getItem("id"));
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };


const [activeTab, setActiveTab] = useState(0)
const [profileImage, setprofileImage] = useState(null)
const name = JSON.parse(localStorage.getItem("user"))
// const image = JSON.parse(localStorage.getItem("profileImage"))
const firstName = name.split(" ")[0]
const [historyData, setHistoryData] = useState([])
const [landlordDashboard, setLandlordDashboard] = useState(0)

useEffect(() => {
  const handleHistory = async () => {
    try{
      const response = await axios.get(`${API_URL}landlordtransactions/${landlordId}`, {}, { headers })
      console.log(response)
      setHistoryData(response?.data?.transactions)
    }catch(error){
      console.log(error)
      toast.error(error?.response?.data.error)
    }
  };
  if (landlordId) {
    handleHistory()
  }
}, [])


  return (
    <div className="dashboard">
      <SideBar setActiveTab={setActiveTab}/>
      <div className="dash">
        <DashboardHeader setActiveTab={setActiveTab} firstName={firstName} profileImage={profileImage} />
        { activeTab === 0 ? <div className="hello">
          <h2>Hello, {firstName}</h2>
          <div className="cardsDE">
              <div className="carde">
                <p>
                  <span><TbHandClick size={20}/></span> 0
                </p>
                <p>Number of clicks</p>
              </div>
              <div className="carde">
                <p>
                  <span><IoHomeOutline size={20}/></span> {landlordDashboard}
                </p>
                <p>Number of property listed</p>
              </div>
              <div className="carde">
                <p>
                  <span><FaRegMoneyBillAlt size={20}/></span> 0
                </p>
                <p>Amount earn this year</p>
              </div>
          </div>
          <div className="history">
            <h2>Transaction List</h2>
            <div className="table">
              <div className="date">
                <div className="Date">
                  <h3>Date</h3>
                </div>
                <div className="Date">
                  <h3>Amount</h3>
                </div>
                <div className="Date">
                  <h3>Property Name</h3>
                </div>
                <div className="Date">
                  <h3>Time</h3>
                </div>
                <div className="Date">
                  <h3>Status</h3>
                </div>
              </div>
              {historyData?.map((history, index) => (
                <div className="datas" key={index}>
                  <div className="Date">
                    <p>{history.date}</p>
                  </div>
                  <div className="Date">
                    <p>{history.amount}</p>
                  </div>
                  <div className="Date">
                    <p>{history.propertyName}</p>
                  </div>
                  <div className="Date">
                    <p>{history.time}</p>
                  </div>
                  <div className="Date">
                    <p>{history.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> : null }     
        { activeTab === 1 ? <LandlordPropertyUpload /> : null}
        { activeTab === 2 ? <LandLordListing setLandlordDashboard={setLandlordDashboard}/> : null}  
        { activeTab === 3 ? <ProfilePage /> : null}     
      </div>
    </div>
  );
};

export default LandlordDashboard;
