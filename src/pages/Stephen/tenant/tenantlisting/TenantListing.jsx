import React, { useEffect, useState } from "react";
import "./tenantlisting.css";
import TenantListingCard from "../../../../components/tenantlistingcard/TenantListingCard";
import SearchBar from "../../../../components/searchbar/SearchBar";
import axios from "axios";

const TenantListing = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [allListing, setAllListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 10;

  const getAllListing = async () => {
    try {
      const res = await axios.get(`${API_URL}/getAllListings`);
      setAllListings(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllListing();
  }, []);

  const handleSearchResults = (results) => {
    setAllListings(results);
    console.log(results);
    setCurrentPage(1);
  };

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = allListing.slice(
    indexOfFirstListing,
    indexOfLastListing
  );
  const totalPages = Math.ceil(allListing.length / listingsPerPage);

  return (
    <div className="listingMain">
      <div className="listingHeroWrapper">
        <div className="listingHero">
          <h2>Property Listings</h2>
          <p>"Explore the Best Properties in Your Area"</p>
          <SearchBar onSearch={handleSearchResults} />
        </div>
      </div>

      <div className="listingCardHolder">
        <div className="listingCardWraper">
          {allListing.length === 0 ? (
            <p className="no-results-message">
              No property found.
            </p>
          ) : (
            currentListings.map((item, index) => (
              <TenantListingCard key={index} items={item} />
            ))
          )}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "activePage" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantListing;
