import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import {
  createProfile,
  getLandlordProfile,
  updateLandlordProfileAsync,
} from "../../../config/api";
import "./profilepage.css";

const dataURLtoBlob = (dataURL) => {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

const mail = JSON.parse(localStorage.getItem("email"));
const name = JSON.parse(localStorage.getItem("user"));

function ProfilePage({ setProfileImage, setFirstName }) {
  const [details, setDetails] = useState({
    fullName: name,
    email: mail,
    street: "",
    locality: "",
    state: "",
  });

  const [image, setImage] = useState(null);
  const [landlordId, setLandlordId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [landlordProfileId, setLandlordProfileId] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedLandlordId = JSON.parse(localStorage.getItem("id"));
    const storedProfileId = JSON.parse(localStorage.getItem("landlordprofileid"));
    setLandlordId(storedLandlordId);
    setLandlordProfileId(storedProfileId);
  }, []);

  const handleInputChange = (field) => (e) => {
    setDetails({ ...details, [field]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        setImage(base64Image);
      };

      reader.readAsDataURL(file);
    }
  };

  const emptyForm = () => {
    setDetails({
      fullName: "",
      email: "",
      street: "",
      locality: "",
      state: "",
    });
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, street, locality, state } = details;

    if (!fullName || !email || !street || !locality || !state || !image) {
      toast.error("Please fill all the fields");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Email format is incorrect");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("street", street);
    formData.append("locality", locality);
    formData.append("state", state);

    const imageBlob = dataURLtoBlob(image);
    formData.append("profileImage", imageBlob, "profileImage.jpg");

    try {
      if (isEditing) {
        await updateLandlordProfileAsync(landlordProfileId, formData);
        toast.success("Profile updated successfully!");
      } else {
        const data = await createProfile(landlordId, formData);
        // console.log(data)
        // localStorage.setItem("landlordprofileid", JSON.stringify(data.id));
        // toast.success("Profile created successfully!");
      }

      const firstNameOnly = fullName.trim().split(" ")[0];
      setFirstName(firstNameOnly);
      emptyForm();
    } catch (error) {
      console.error(error);
      toast.error("Error submitting profile");
    }
  };

  const handleEditProfile = async () => {
    try {
      const profileId = JSON.parse(localStorage.getItem("landlordprofileid"));
      console.log(profileId)
      const response = await getLandlordProfile(profileId);
      const { fullName, email, street, locality, state, profileImage } = response.profile;

      setDetails({
        fullName,
        email,
        street,
        locality,
        state,
      });

      if (profileImage) {
        setImage(profileImage);
      }

      setIsEditing(true);
      toast.success("Profile loaded for editing");
    } catch (error) {
      console.error("Failed to load profile for editing", error);
      toast.error("Error loading profile");
    }
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
                ref={fileInputRef}
                onChange={handleImageChange}
              />
            </div>

            <div className="actionbuttonwrapper1">
              <button type="button" className="cancelbtn1" onClick={emptyForm}>
                Clear
              </button>
              <button type="submit" className="submitbtn">
                {isEditing ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </form>

        <div style={{ marginTop: "10px" }}>
          <button type="button" className="submitbtn" onClick={handleEditProfile}>
            Edit Existing Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
