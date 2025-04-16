import React, { useState } from "react";
import "./profilepage.css";

function ProfilePage() {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    street: "",
    locality: "",
    state: "",
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (field) => (e) => {
    setDetails({ ...details, [field]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    console.log("Details:", details);
    console.log("Image:", image);
    
  };

  return (
    <div>
      <div className="informationdetailcont">
        <h1 style={{ marginLeft: "30px", paddingTop: "10px", fontSize: "27px" }}>
          My Profile
        </h1>
        <form className="profileform" onSubmit={handleSubmit}>
          <div className="inforcontainer">
            <h2>Full Name</h2>
            <input
              className="containerwarpper"
              type="text"
              placeholder="Full name"
              value={details.fullName}
              onChange={handleInputChange("fullName")}
            />
          </div>

          <div className="inforcontainer">
            <h2>Email</h2>
            <input
              className="containerwrap"
              type="email"
              placeholder="Enter email here ..."
              value={details.email}
              onChange={handleInputChange("email")}
            />
          </div>

          <div className="inforcontainer">
            <h2>Street</h2>
            <input
              className="containerwrap"
              type="text"
              placeholder="Enter address here ..."
              value={details.street}
              onChange={handleInputChange("street")}
            />
          </div>

          <div className="origindetailswrap">
            <div className="localitycontwrap">
              <h2>Locality</h2>
              <input
                className="localityinputwrapper"
                type="text"
                placeholder="Locality"
                value={details.locality}
                onChange={handleInputChange("locality")}
              />
            </div>

            <div className="statecontwrap">
              <h2>State</h2>
              <input
                className="stateinputwrapper"
                type="text"
                placeholder="State"
                value={details.state}
                onChange={handleInputChange("state")}
              />
            </div>
          </div>

          <div className="actionbtn">
            <div className="profileupload">
              <h4>Upload Picture</h4>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="actionbuttonwrapper1">
              <button type="button" className="cancelbtn1">
                Cancel
              </button>
              <button type="submit" className="submitbtn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
