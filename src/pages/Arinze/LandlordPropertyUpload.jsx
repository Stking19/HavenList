import React, { useState } from "react";
import "./LandlordPropertyUpload.css";
import { Modal } from "antd";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const LandlordPropertyUpload = () => {
  const [imgBox, setImgBox] = useState([
    { id: 1, imgUrl: "" },
    { id: 2, imgUrl: "" },
    { id: 3, imgUrl: "" },
    { id: 4, imgUrl: "" },
    { id: 5, imgUrl: "" },
  ]);
  const [open, setOpen] = useState(false);
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

  const scancel = () => {
    setOpen(false);
  };

  const landlord = JSON.parse(localStorage.getItem("id"));
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log(landlord);

  const [isloading, setIsLoading] = useState(false)

  const handleUpload = async () => {
    setIsLoading(true)
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
      setIsLoading(false)
    } catch (err) {

      console.log(err);
      setIsLoading(false)
    }
  };

  return (
    <div className="LandlordPropertyUploadMain">
      <Modal
        open={open}
        onCancel={scancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={500}
      >
        <div className="uploadSuc">
          <h3>Upload Successfull</h3>
        </div>
      </Modal>
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
                <option value="Detached House">Detached House</option>
                <option value="Semi-Detached House">Semi-Detached House</option>
                <option value="Terraced House">Terraced House</option>
                <option value="Town House">Town House</option>
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
                    <img src={item.imgUrl} alt={`Uploaded ${item.id}`} />
                  ) : (
                    <label htmlFor={`img-${item.id}`}>
                      <CiImageOn style={{ cursor: "pointer" }} />
                    </label>
                  )}
                </div>
              ))}
            </div>
          </section>
          <button className="propertyUploadBtn" onClick={handleUpload} disabled={!isloading}>
            {
              isloading ? 'Uploading...' : 'Upload'
            }
          </button>
        </section>
      </div>
    </div>
  );
};

export default LandlordPropertyUpload;
