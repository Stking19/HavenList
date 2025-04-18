import React, { useState } from "react";
import "./searchbar.css";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const SearchBar = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  
  const [searchInput,setSearchInput] = useState({
    area:'',
    type:'',
    bedrooms:'',
    bathrooms:'',
    minrent:'',
    maxrent:''
  })
  
  const handleOnchange =(e)=>{
    const {name,value} = e.target
    setSearchInput((prev)=>({...prev,[name]:value}))
  }
  
  console.log(searchInput)
  
  const searchListing = async ()=>{
    const {area,type,bedrooms,bathrooms,minrent,maxrent} = searchInput
    try {
      const res = await axios.get(`${API_URL}/searchListing`,{
        params:{
          area,
          type,
          bedrooms,
          bathrooms,
          minrent,
          maxrent
        }
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="searchBar">
      <div className="search">
        <p><FiSearch  /></p>
        <input type="text"
        name="area"
         placeholder="Location"
         onChange={handleOnchange}
         value={searchInput.area}
          />
        <button onClick={searchListing}>Search</button>
      </div>
      <div className="filters">
        <select
          name="type"
          onChange={handleOnchange}
          value={searchInput.type}
        >
          <option value=''>Type</option>
          <option value="flat">flat</option>
          <option value="bungalow">bungalow</option>
          <option value="mini-flat">mini-flat</option>
          <option value="duplex">duplex</option>
        </select>

        <select
        name="bedrooms"
        onChange={handleOnchange}
        value={searchInput.bedrooms}
        >
          <option value=''>Bedroom</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <select
        name="bathrooms"
        onChange={handleOnchange}
        value={searchInput.bathroom}
        >
          <option value=''>bathrooms </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <select 
        name="minrent"
        onChange={handleOnchange}
        value={searchInput.minrent}
        >
          <option value=''>Min. Rent</option>
          <option value="500,000">500,000</option>
          <option value="600,000">600,0000</option>
          <option value="700,000">700,000</option>
          <option value="800,00">800,000</option>
          <option value="900,000">900,000</option>
          <option value="1000000">1000000</option>
        </select>

        <select 
        name="maxrent"
        onChange={handleOnchange}
        value={searchInput.maxrent}
        style={{border: "none"}}
        >
          <option value=''>Max. Rent</option>
          <option value="1000000">1000000</option>
          <option value="2000000">2000000</option>
          <option value="3000000">3000000</option>
          <option value="4000000">4000000</option>
          <option value="5000000">5000000</option>
          <option value="6000000">6000000</option>
        </select>

      </div>
    </div>
  );
};

export default SearchBar;
