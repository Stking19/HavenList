import React from 'react'
import './listing.css'
import ListingCard from '../../../components/listingCard/ListingCard'
import SearchBar from '../../../components/searchbar/SearchBar'

const Listing = () => {
  return (
    <div className='listingMain'>
  <div className='listingHeroWrapper'>
     <div className='listingHero'>
        <h2>Property Listings</h2>
        <p>"Explore the Best Properties in Your Area</p>
        <SearchBar/>
     </div>
  </div>
  <div className='listingCardHolder'>
      <div className='listingCardWraper'>
      <ListingCard/>
      </div>
    </div>
  );
};

export default Listing;
