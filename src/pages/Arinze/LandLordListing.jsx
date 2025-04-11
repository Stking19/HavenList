import React from 'react'
import './landLordListig.css'
import ListingCard from '../../components/listingCard/ListingCard'

const LandLordListing = () => {
  return (
    <div className='landLordListingMain'>
      <div className='asideDashBord'>

      </div>
      <div className='landLordMainScreen'>
        <span className='textHeader'>
            <h3>My Listings</h3>
            <h3>Upload Property</h3>
        </span>
        <div className='landlordListingHolder'>
           <ListingCard/>
        </div>
      </div>
    </div>
  )
}

export default LandLordListing
