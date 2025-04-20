import React, { useState } from "react";
import "./LandlordPropertyUpload.css";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";
import Loadscreen from "../../../src/loadscreen/Loadscreen";

const API_URL = import.meta.env.VITE_API_URL;

const LandlordPropertyUpload = ({setActiveTab}) => {
  const [imgBox, setImgBox] = useState([
    { id: 1, imgUrl: "" },
    { id: 2, imgUrl: "" },
    { id: 3, imgUrl: "" },
    { id: 4, imgUrl: "" },
    { id: 5, imgUrl: "" },
  ]);
  const [userInput, setUserInput] = useState({
    title: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    toilets: "",
    description: "",
    street: "",
    state:'' ,
    partPayment:'',
    area: "",
    price: "",
    year: "",
  });
  console.log(userInput);

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);

    setImgBox((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, imgUrl, file } : item
      )
    );
  };

  const isFormValid = () => {
    const allFields = Object.values(userInput).every(
      (value) => value.trim() !== ""
    );
    const atLeastOneImage = imgBox.some((item) => item.imgUrl !== "");
    return allFields && atLeastOneImage;
  };

  const landlord = JSON.parse(localStorage.getItem("id"));
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log(landlord);

  const [isloading, setIsLoading] = useState(false)
  const resetInput = () => {
    setUserInput({
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      toilets: "",
      description: "",
      street: "",
      state:'',
      partPayment:'',
      area: "",
      price: "",
      year: "",
    });
    setImgBox([
      { id: 1, imgUrl: "" },
      { id: 2, imgUrl: "" },
      { id: 3, imgUrl: "" },
      { id: 4, imgUrl: "" },
      { id: 5, imgUrl: "" },
    ]);
  }

  const handleUpload = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      Object.entries(userInput).forEach(([key, value]) => {
        formData.append(key, value);
      });

      imgBox.forEach((item) => {
        if (item.file) {
          formData.append("listingImage", item.file);
        }
      });
      const response = await axios.post(
        `${API_URL}createlisting/${landlord}`,
        formData,
        { headers }
      );
      console.log(response);
      setIsLoading(false);
      if (response.status === 201) {
        toast.success(response?.data?.message);
        resetInput();
        setTimeout(() => {
          setActiveTab(2)
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="LandlordPropertyUploadMain">
      {isloading && (
        <div className="uploadOverlay">
          <Loadscreen />
        </div>
      )}
      <div className="landLordUploadMainScreen">
        <section className="landLordUploadDetail">
          <h2>Tell us more about this listing</h2>
          <p>
            If having any issues during your listing creation, please contact
            our support team.
          </p>

          <div className="propertyDetailsUpload">
            <h3>Property Details</h3>
            <div className="line"></div>
            <span className="uploadTitle">
              <h3>Title</h3>
              <input
                type="text"
                placeholder="e.g newly built 3 bedroom flat in a serene neighbourhood"
                value={userInput.title}
                onChange={(e) =>
                  setUserInput({ ...userInput, title: e.target.value })
                }
              />
            </span>

            <span className="uploadTitle">
              <select
                value={userInput.type}
                onChange={(e) =>
                  setUserInput({ ...userInput, type: e.target.value })
                }
              >
                <option value="">House Type</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Flat/Apartment">Flat/Apartment</option>
                <option value="Duplex">Duplex</option>
              </select>
            </span>
            <section className="numberOfBedsOpt">
              <span>
                <h3>BedRooms</h3>
                <select
                  value={userInput.bedrooms}
                  onChange={(e) =>
                    setUserInput({ ...userInput, bedrooms: e.target.value })
                  }
                >
                  <option value="">BedRooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </span>

              <span>
                <h3>BathRooms</h3>
                <select
                  value={userInput.bathrooms}
                  onChange={(e) =>
                    setUserInput({ ...userInput, bathrooms: e.target.value })
                  }
                >
                  <option>BathRooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </span>

              <span>
                <h3>Toilet</h3>
                <select
                  value={userInput.toilets}
                  onChange={(e) =>
                    setUserInput({ ...userInput, toilets: e.target.value })
                  }
                >
                  <option value="">Toilet</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </span>
            </section>
            <span className="uploadTitle">
              <h3>Description</h3>
              <textarea
                type="text"
                placeholder="e.g newly built 3 bedroom flat in a serene neighbourhood"
                className="desc"
                value={userInput.description}
                onChange={(e) =>
                  setUserInput({ ...userInput, description: e.target.value })
                }
              />
            </span>
          </div>

          <div className="addressDetailUpload">
            <h3>Address Details</h3>
            <div className="line"></div>

            <section className="addressDetailsInputs">
              <div className="addressDualInput">
                <span>
                  <h3>Street</h3>
                  <input
                    type="text"
                    placeholder="Street"
                    value={userInput.street}
                    onChange={(e) =>
                      setUserInput({ ...userInput, street: e.target.value })
                    }
                  />
                </span>

                <select name="area"
                  placeholder="Area"
                  className="areaSelect"
                  value={userInput.area}
                  onChange={(e) =>
                    setUserInput({ ...userInput, area: e.target.value })
                  }
                >
                  <option value="">Area</option>
                  <option value="Ikorodu">Ikorodu</option>
                  <option value="Agege">Agege</option>
                  <option value="Ajeromi ifelodun">Ajeromi ifelodun</option>
                  <option value="Alimosho">Alimosho</option>
                  <option value="Apapa">Apapa</option>
                  <option value="Badagry">Badagry</option>
                  <option value="Epe">Epe</option>
                  <option value="Eti-Osa">Eti-Osa</option>
                  <option value="Ibeju Lekki">Ibeju Lekki</option>
                  <option value="Ikeja">Ikeja</option>
                  <option value="Ikorodun">Ikorodu</option>
                  <option value="Lagos Island">Lagos Island</option>
                  <option value="Mushin">Mushin</option>
                  <option value="Ojo">Ojo</option>
                  <option value="Shomolu">Shomolu</option>
                  <option value="Surulere">Surulere</option>
                </select>
              </div>
                  
                  <select 
                  name="state"
                  className="stateSelect"
                  value={userInput.state}
                  onChange={(e) =>
                    setUserInput({ ...userInput, state: e.target.value })
                  }
                   >
                    <option value="">state</option>
                    <option value="Lagos">Lagos</option>
                  </select>
        
            </section>
          </div>

          <div className="paymentDtailUploads">
            <h3>Payment Details</h3>
            <div className="line"></div>

            <section className="paymentDetailInputs">
              <div className="paymentDualInput">
                <span>
                  <h3>Price</h3>
                  <input
                    type="number"
                    placeholder="Price"
                    value={userInput.price}
                    onChange={(e) =>
                      setUserInput({ ...userInput, price: e.target.value })
                    }
                  />
                </span>
                <span>
                  <h3>Year</h3>
                  <select
                    value={userInput.year}
                    onChange={(e) =>
                      setUserInput({ ...userInput, year: e.target.value })
                    }
                  >
                    <option value="">No of years</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </span>
              </div>
              <select
               name="partPayment"
               className="partPayment"
               onChange={(e)=>setUserInput({...userInput ,partPayment:e.target.value})}
              >
                <option value="">part payment</option>
                <option value="10%">10%</option>
                <option value="20%">20%</option>
                <option value="30%">30%</option>
              </select>
            </section>
          </div>

          <section className="imageDetailUpload">
            <k>Click to add image</k>
            <div className="holderIm">
              {imgBox.map((item, index) => (
                <div className="uploadImageCont" key={item.id}>
                  <input
                    type="file"
                    name=""
                    id={`img-${item.id}`}
                    hidden
                    onChange={(e) => handleImageUpload(e, index)}
                  />
                  {item.imgUrl ? (
                    <img src={item.imgUrl} alt={`Uploaded ${item.id}`} style={{width: "150px", height: "150px", borderRadius: "10px"}}/>
                  ) : (
                    <label htmlFor={`img-${item.id}`}>
                      <CiImageOn style={{ cursor: "pointer" }} />
                    </label>
                  )}
                </div>
              ))}
            </div>
          </section>
          <button
            className="propertyUploadBtn"
            onClick={handleUpload}
            disabled={!isFormValid() || isloading}
          >
            Upload
          </button>
        </section>
      </div>
    </div>
  );
};

export default LandlordPropertyUpload;
