import React, { useEffect, useState } from 'react'
import './landLordListig.css'
import ListingCard from '../../components/listingCard/ListingCard'
import axios from 'axios';


const LandLordListing = () => {



  const API_URL = import.meta.env.VITE_API_URL;

  const [listingHolder, setListingHolder] = useState([])


  const landLordListing = async () => {
    const landlordId = localStorage.getItem('id')
    try {
      const res = await axios.get(`${API_URL}/getAllListingsByLandlord`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${landlordId}`
        },
      })
      console.log(res.data.data)
      setListingHolder(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    landLordListing()
  }, [])

  return (
    <div className='landLordListingMain'>
      <div className='landLordMainScreen'>
        <span className='textHeader'>
          <h3>My Listings</h3>
        </span>
        <div className='landlordListingHolder'>

          {listingHolder?.length === 0 ? 'No Listed Property!' :
            listingHolder?.map((item, index)=>(
              <ListingCard  key={index} items={item} />
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default LandLordListing
