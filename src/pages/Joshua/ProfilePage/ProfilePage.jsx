import React, { useState, useEffect, useRef } from "react";
import { createProfile, getProfile, updateProfile } from "../../../config/api";
import "./profilepage.css";
import { FiEdit2 } from "react-icons/fi";
import Loadscreen from "../../../loadscreen/Loadscreen";

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

function ProfilePage() {
  const [details, setDetails] = useState({
    fullName: name || "",
    email: mail || "",
    street: "",
    locality: "",
    state: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [landlordId, setLandlordId] = useState(null);
  const [editMode, setEditMode] = useState({
    fullName: true,
    street: true,
    locality: true,
    state: true,
  });
  const [profileExists, setProfileExists] = useState(false);
  const fileInputRef = useRef(null);
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    const storedLandlordId = JSON.parse(localStorage.getItem("id"));
    const profileId = localStorage.getItem("landlordprofileid");
    setLandlordId(storedLandlordId);
    if (profileId){
    setProfileId(profileId);
    }
    fetchProfile(profileId);
  }, []);

  const fetchProfile = async (id) => {
    try {
      setLoading(true);
      const profile = await getProfile(id, setLoading);
      if (profile) {
        setDetails({
          fullName: profile.fullName,
          email: profile.email,
          street: profile.street,
          locality: profile.locality,
          state: profile.state,
        });
        setProfileExists(true);
        setLoading(false);
        console.log(profile);
      }
    } catch (err) {
      console.log("No existing profile found.");
      setLoading(false)
    }
  };

  const handleInputChange = (field) => (e) => {
    setDetails({ ...details, [field]: e.target.value });
  };

  const toggleEdit = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    const { fullName, email, street, locality, state } = details;

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("street", street);
      formData.append("locality", locality);
      formData.append("state", state);

      if (image) {
        const imageBlob = dataURLtoBlob(image);
        formData.append("profileImage", imageBlob, "profileImage.jpg");
      }

      if (profileExists) {
        await updateProfile(profileId, formData);
        setLoading(false)
      } else {
        await createProfile(landlordId, formData);
      }
      setImage(null);
      fetchProfile(landlordId);
      setEditMode({
        fullName: true,
        street: true,
        locality: true,
        state: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setDetails({
      fullName: name,
      email: mail,
      street: "",
      locality: "",
      state: "",
    });
    setEditMode({
      fullName: true,
      street: true,
      locality: true,
      state: true,
    });
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const renderField = (label, value, fieldKey) => (
    <div className="inforcontainer">
      <h2>{label}</h2>
      {editMode[fieldKey] ? (
        <div className="readonly-field">
          <span>{value || "N/A"}</span>
          <FiEdit2 className="edit-icon" onClick={() => toggleEdit(fieldKey)} />
        </div>
      ) : (
        <input
          className="containerwrap"
          type="text"
          value={value}
          onChange={handleInputChange(fieldKey)}
          placeholder={`Enter ${label.toLowerCase()} here...`}
        />
      )}
    </div>
  );

  return (
    <div>
      {loading && (
        <div className="uploadOverlay">
          <Loadscreen />
        </div>
      )}
      <div className="informationdetailcont">
        <h1
          style={{ marginLeft: "30px", paddingTop: "10px", fontSize: "27px" }}
        >
          My Profile
        </h1>
        <form className="profileform" onSubmit={handleSubmitProfile}>
          {renderField("Full Name", details.fullName, "fullName")}

          <div className="inforcontainer">
            <h2>Email</h2>
            <div className="readonly-field">
              <span>{details.email}</span>
            </div>
          </div>

          {renderField("Street", details.street, "street")}

          <div className="origindetailswrap">
            <div className="localitycontwrap">
              <h2>Locality</h2>
              {editMode.locality ? (
                <div className="readonly-field">
                  <span>{details.locality || "N/A"}</span>
                  <FiEdit2
                    className="edit-icon"
                    onClick={() => toggleEdit("locality")}
                  />
                </div>
              ) : (
                <input
                  className="localityinputwrapper"
                  type="text"
                  value={details.locality}
                  onChange={handleInputChange("locality")}
                  placeholder="Locality"
                />
              )}
            </div>

            <div className="statecontwrap">
              <h2>State</h2>
              {editMode.state ? (
                <div className="readonly-field">
                  <span>{details.state || "N/A"}</span>
                  <FiEdit2
                    className="edit-icon"
                    onClick={() => toggleEdit("state")}
                  />
                </div>
              ) : (
                <input
                  className="stateinputwrapper"
                  type="text"
                  value={details.state}
                  onChange={handleInputChange("state")}
                  placeholder="State"
                />
              )}
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
              <button
                type="button"
                className="cancelbtn1"
                onClick={handleCancel}
              >
                Clear
              </button>
              <button type="submit" className="submitbtn">
                {profileExists ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
