import React, { useEffect, useState } from 'react'
import './landLordListig.css'
import ListingCard from '../../components/listingCard/ListingCard'
import axios from 'axios';


const LandLordListing = ({setLandlordDashboard}) => {



  const API_URL = import.meta.env.VITE_API_URL;

  const [listingHolder, setListingHolder] = useState([])
  const token = localStorage.getItem('token')
  const landlordId = JSON.parse(localStorage.getItem('id'))
  console.log(landlordId)

  useEffect(() => {
  const landLordListing = async () => {
    console.log(landlordId)
    try {
      const res = await axios.get(`${API_URL}getAllListingsByLandlord/${landlordId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `
        },
      })
      console.log(res)
      setLandlordDashboard(res?.data?.total)
      setListingHolder(res?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }
  if (landlordId) {
    landLordListing()
  }
  }, [])


  console.log(listingHolder)

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
