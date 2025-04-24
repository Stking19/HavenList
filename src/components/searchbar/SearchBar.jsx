import React, { useState, useEffect } from "react";
import "./searchbar.css";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import toast from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [searchInput, setSearchInput] = useState({
    area: '',
    type: '',
    bedrooms: '',
    bathrooms: ''
  });

  useEffect(() => {
    const { area, type, bedrooms, bathrooms } = searchInput;
    const allEmpty = !area && !type && !bedrooms && !bathrooms;
    if (allEmpty) {
      axios.get(`${API_URL}getAllListings`)
        .then(res => onSearch(res.data.data))
        .catch(err => console.log(err));
    }
  }, [searchInput, API_URL, onSearch]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setSearchInput((prev) => ({ ...prev, [name]: value }));
  };

  const searchListing = async () => {
    const { area, type, bedrooms, bathrooms } = searchInput;
    try {
      const res = await axios.get(`${API_URL}/searchListing`, {
        params: { area, type, bedrooms, bathrooms }
      });
      onSearch(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Search failed');
    }
  };

  return (
    <div className="searchBar">
      <div className="search">
        <p><FiSearch /></p>
        <select name="area" className="search" onChange={handleOnchange} value={searchInput.area}>
          <option value="">Select Area</option>
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
          <option value="Lagos Island">Lagos Island</option>
          <option value="Mushin">Mushin</option>
          <option value="Ojo">Ojo</option>
          <option value="Shomolu">Shomolu</option>
          <option value="Surulere">Surulere</option>
        </select>
        <button onClick={searchListing}>Search</button>
      </div>

      <div className="filters">
        <select name="type" onChange={handleOnchange} value={searchInput.type}>
          <option value=''>Type</option>
          <option value='Bungalow'>Bungalow</option>
          <option value='Flat/Apartment'>Flat/Apartment</option>
          <option value='Duplex'>Duplex</option>
          
        </select>

        <select name="bedrooms" onChange={handleOnchange} value={searchInput.bedrooms}>
          <option value=''>Bedrooms</option>
          {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
        </select>

        <select name="bathrooms" onChange={handleOnchange} value={searchInput.bathrooms}>
          <option value=''>Bathrooms</option>
          {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;