import React from "react";
import "./searchbar.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="search">
        <p><FiSearch  /></p>
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </div>
      <div className="filters">
        <select>
          <option>Type</option>
          <option value="rent">Rent</option>
          <option value="sale">Sale</option>
          <option value="lease">Lease</option>
        </select>
        <select>
          <option>Bedroom</option>
          <option value="rent">Rent</option>
          <option value="sale">Sale</option>
          <option value="lease">Lease</option>
        </select>
        <select>
          <option>Min. Rent</option>
          <option value="rent">Rent</option>
          <option value="sale">Sale</option>
          <option value="lease">Lease</option>
        </select>
        <select style={{border: "none"}}>
          <option>Max. Rent</option>
          <option value="rent">Rent</option>
          <option value="sale">Sale</option>
          <option value="lease">Lease</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
