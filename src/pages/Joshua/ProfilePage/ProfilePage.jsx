import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  createProfile,
  // editProfile,
  deleteProfile,
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
const mail = JSON.parse(localStorage.getItem("email"))
console.log(mail)
const name = JSON.parse(localStorage.getItem("user"))


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

  useEffect(() => {
    const storedLandlordId = JSON.parse(localStorage.getItem("id"));
    console.log(storedLandlordId);
    setLandlordId(storedLandlordId);
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
        console.log(base64Image);
        setImage(base64Image);
        // setProfileImage(base64Image);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCreateProfile = async (e) => {
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

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("street", street);
      formData.append("locality", locality);
      formData.append("state", state);

      const imageBlob = dataURLtoBlob(image);
      console.log(imageBlob)
      formData.append("profileImage", imageBlob, "profileImage.jpg");

      const data = await createProfile(landlordId, formData);
      console.log(data)
      toast.success("Profile created successfully!");
      
      const firstNameOnly = fullName.trim().split(" ")[0];
      setFirstName(firstNameOnly);

      setDetails({
        fullName: "",
        email: "",
        street: "",
        locality: "",
        state: "",
      });
      setImage(null);
      setProfileImage(null);

    } catch (error) {
      console.error(error);
      // toast.error(error?.response?.data?.message);
    }
  };

  const editProfile = async (e) => {
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

    try {
      const profileData = {
        fullName,
        email,
        street,
        locality,
        state,
        profileImage: image,
      };

      const data = await updateProfile(landlordId, profileData);
      toast.success("Profile updated successfully!");

      const firstNameOnly = fullName.trim().split(" ")[0];
      setFirstName(firstNameOnly);
    } catch (error) {
      console.error(error);
      toast.error("Error updating profile");
    }
  };

  const handleDeleteProfile = async (storedLandlordId) => {
    if (!landlordId) {
      toast.error("Landlord ID is missing");
      return;
    }
  
    try {
      await deleteProfile(storedLandlordId);
      toast.success("Profile deleted successfully!");
  
      setDetails({
        fullName: "",
        email: "",
        street: "",
        locality: "",
        state: "",
      });
      setProfileImage(null);
      setFirstName("");
    } catch (error) {
      console.error(error);
      toast.error("Error deleting profile");
    }
  };
  const handleCancel = () => {
    setDetails({
      fullName: "",
      email: "",
      street: "",
      locality: "",
      state: "",
    });
    setImage(null);
  };

  
  return (
    <div>
      <div className="informationdetailcont">
        <h1 style={{ marginLeft: "30px", paddingTop: "10px", fontSize: "27px" }}>
          My Profile
        </h1>

        <form className="profileform" onSubmit={handleCreateProfile}>
          <div className="inforcontainer">
            <h2>Full Name</h2>
            <input
              className="containerwarpper"
              type="text"
              placeholder="Full name"
              disabled = {true}
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
              disabled = {true}
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
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>

            <div className="actionbuttonwrapper1">
              <button type="button" className="cancelbtn1" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="submitbtn">
                Submit
              </button>
              <button type="button" className="submitbtn" onClick={editProfileProfile}>
                Edit
              </button>
              {/* <button type="button" className="submitbtn" onClick={handleDeleteProfile}>
                Delete Profile
              </button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
