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
  const landlord = [
    {
      icon: <TbHandClick />,
      data: "500",
      detail: "Number of clicks",
    },
    {
      icon: <IoHomeOutline />,
      data: "14",
      detail: "Number of property listed",
    },
    {
      icon: <FaRegMoneyBillAlt />,
      data: "10,000,000",
      detail: "Amount earn this year",
    },
  ];

  // const historyData = [
  //   {
  //     date: "4, january 2025",
  //     amount: "# 2,000,000",
  //     propertyName: "one Bedroom Flat",
  //     time: "3pm",
  //     status: "Failed"
  //   },
  //   {
  //     date: "4, january 2025",
  //     amount: "# 3,000,000",
  //     propertyName: "Two Bedroom Flat",
  //     time: "12pm",
  //     status: "Success"
  //   },
  //   {
  //     date: "4, january 2025",
  //     amount: "# 7,000,000",
  //     propertyName: "Three Bedroom Flat",
  //     time: "8am",
  //     status: "Success"
  //   },
  // ];

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
            {landlord.map((item, index) => (
              <div className="carde" key={index}>
                <p>
                  <span>{item.icon}</span> {item.data}
                </p>
                <p>{item.detail}</p>
              </div>
            ))}
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
        { activeTab === 2 ? <LandLordListing /> : null}  
        { activeTab === 3 ? <ProfilePage /> : null}     
      </div>
    </div>
  );
};

export default LandlordDashboard;
