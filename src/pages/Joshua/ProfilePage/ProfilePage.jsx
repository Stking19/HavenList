import React, { useState } from "react";
import "./profilepage.css";

function ProfilePage() {
  const [details, setDetails] = useState({
    street: "",
    locality: "",
    state: "",
  });
  return (
    <div>
      <div className="informationdetailcont">
        <h1
          style={{ marginLeft: "30px", paddingTop: "10px", fontSize: "27px" }}
        >
          My Profile
        </h1>
        <form className="profileform">
          <div className="inforcontainer">
            <h2>Full Name</h2>
            <input
              className="containerwarpper"
              type="text"
              placeholder="Full name"
            />
          </div>

          <div className="inforcontainer">
            <h2>Email</h2>
            <input
              className="containerwrap"
              type="text"
              placeholder="Enter email here ..."
            />
          </div>

          <div className="inforcontainer">
            <h2>Street</h2>
            <input
              className="containerwrap"
              type="text"
              placeholder="Enter address here ..."
              value={details.street}
              onChange={(e) =>
                setDetails({ ...details, street: e.target.value })
              }
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
                onChange={(e) =>
                  setDetails({ ...details, locality: e.target.value })
                }
              />
            </div>

            <div className="statecontwrap">
              <h2>State</h2>
              <input
                className="stateinputwrapper"
                placeholder="state"
                value={details.state}
                type="text"
                onChange={(e)=> setDetails({...details, state: e.target.value})}
              />
            </div>
          </div>

          <div className="actionbtn">
            <div className="actionbuttonwrapper">
              <button className="cancelbtn">Cancel</button>
              <button className="submitbtn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
