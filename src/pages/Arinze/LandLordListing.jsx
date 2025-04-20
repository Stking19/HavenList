import React, { useEffect, useState } from 'react'
import './landLordListig.css'
import axios from 'axios';
import DashboardListingCard from '../../components/dashboardlistingcard/DashboardListingCard';
import toast from 'react-hot-toast';


const LandLordListing = ({setLandlordDashboard}) => {

  const API_URL = import.meta.env.VITE_API_URL;

  const [listingHolder, setListingHolder] = useState([])
  const token = localStorage.getItem('token')
  const landlordId = JSON.parse(localStorage.getItem('id'))

  const deleteListing = async (item) => {
    console.log(item, "this is the item")
    const confirm = window.confirm("Are you sure you want to delete this listing?");
    if (!confirm) return;
    try {
      const res = await axios.delete(`${API_URL}deleteListing/${landlordId}/${item}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `
        },
      })
      console.log(res)
      toast.success(res?.data?.message)
      setLandlordDashboard(res?.data?.total)
      setListingHolder((prev) => prev.filter((listing) => listing.id !== item))
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message || 'Failed to delete listing')
    }
  }

  useEffect(() => {
  const landLordListing = async () => {
    try {
      const res = await axios.get(`${API_URL}getAllListingsByLandlord/${landlordId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `
        },
      })
      setLandlordDashboard(res?.data?.total)
      setListingHolder(res?.data?.data)
    } catch (error) {
      // console.log(error)
    }
  }
  if (landlordId) {
    landLordListing()
  }
  }, [])

  return (
    <div className='landLordListingMain'>
      <div className='landLordMainScreen'>
        <span className='textHeader'>
          <h3>My Listings</h3>
        </span>
        <div className='landlordListingHolder'>

          {listingHolder?.length === 0 ? 'No Listed Property!' :
            listingHolder?.map((item)=>(
              <DashboardListingCard  key={item?.id} items={item} onDelete={() => deleteListing(item?.id)}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LandLordListing
