import React, { useEffect, useState } from 'react'
import './tenantlisting.css'
import ListingCard from '../../../../components/tenantlistingcard/TenantListingCard'
import SearchBar from '../../../../components/searchbar/SearchBar'
import axios from 'axios'




const TenantListing = () => {
  const API_URL = import.meta.env.VITE_API_URL;

 
  const [allListing, setAllListings] = useState([])


  const getAllListing = async () => {
    try {
      const res = await axios.get(`${API_URL}/getAllListings`)
      console.log(res.data.data)
      setAllListings(res.data.data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllListing()
  }, [])

  return (
    <div className='listingMain'>
      <div className='listingHeroWrapper'>
        <div className='listingHero'>
          <h2>Property Listings</h2>
          <p>"Explore the Best Properties in Your Area</p>
          <SearchBar />
        </div>
      </div>
      <div className='listingCardHolder'>
        <div className='listingCardWraper'>
          {
            allListing?.length === 0 ? 'No Listed Property!' :
              allListing?.map((item, index) => (
                <ListingCard key={index} items={item} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default TenantListing;
