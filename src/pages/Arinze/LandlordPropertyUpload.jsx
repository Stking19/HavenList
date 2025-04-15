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

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);

    setImgBox((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, imgUrl } : item))
    );
  };

  const scancel = () => {
    setOpen(false);
  };

  const landlord = localStorage.getItem("");

  const handleUpload = async () => {

    try{
      const response = await axios.post(`${API_URL}/createlisting/${landlord}`,)
      console.log(response)
    }catch(err){
      console.log(err)
    }
  }

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
              />
            </span>
            <span className="uploadTitle">
              <select>
                <option value="">House Type</option>
                <option value="">Bungalow</option>
                <option value="">Flat</option>
                <option value="">Duplex</option>
              </select>
            </span>
            <section className="numberOfBedsOpt">
              <span>
                <h3>BedRooms</h3>
                <select>
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
                <select>
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
                <select>
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
                <input
                  type="text"
                  placeholder="e.g newly built 3 bedroom flat in a serene neighbourhood"
                  className="desc"
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
                  <input type="text" placeholder="Street" />
                </span>

                <span>
                  <h3>Area</h3>
                  <input type="text" placeholder="Area" />
                </span>
              </div>

              <span>
                <h3 style={{ fontWeight: "300" }}>State</h3>
                <input type="text" placeholder="State" />
              </span>
            </section>
          </div>

          <div className="paymentDtailUploads">
            <h3>Payment Details</h3>
            <div className="line"></div>

            <section className="paymentDetailInputs">
              <div className="paymentDualInput">
                <span>
                  <h3>Min Price</h3>
                  <input type="text" placeholder="Price" />
                </span>
                <span>
                  <h3>Max Price</h3>
                  <input type="text" placeholder="Price" />
                </span>
                <span>
                  <h3>Price</h3>
                  <input type="text" placeholder="Price" />
                </span>
                <span>
                  <h3>Year</h3>
                  <select>
                    <option value="">No of years</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </span>
              </div>
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
          <button className="propertyUploadBtn" onClick={() => setOpen(true)}>
            Upload
          </button>
        </section>
      </div>
    </div>
  );
};

export default LandlordPropertyUpload;
