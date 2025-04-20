import React from 'react'
import './dashboardlistingCard.css'
import { LiaToiletSolid } from "react-icons/lia";
import { GiBathtub } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

const DashboardListingCard = ({items, onDelete}) => {

  const handleDeleteClick = () => {
    onDelete(items?.id); 
  }

  return (
    <div className='listingCardMain'>
          <div  className='listingCardContentHolder'>
          <span className='listingPropertyImage'>
           <img src={items?.listingImage?.[0]?.imageUrl} alt="" />
          </span>
          <div className='listingPropertyDetails'>
           <h2 style={{color:'#2F80ED'}}>{items?.title}</h2>
           <p>{items?.street} {items?.state}</p>
           <p style={{width: "100%"}}>{items?.description}</p>
          <h2 style={{color:'#2F80ED',display:'flex',alignItems:'center', gap: "5px"}}>N{items?.price}<small style={{color:'black',fontSize:'12px'}}>{items?.frequency}</small></h2>
          </div>
       </div>
        <section className='listingFooter'>
          <div className='listingFooterContent'> <IoIosBed size={20}/> {items?.bedrooms} Bedrooms</div>
          <div className='listingFooterContent'> <GiBathtub size={20}/>{items?.bathrooms} Bathrooms</div>
          <span ><LiaToiletSolid size={20}/>{items?.toilets} Toilets</span>
          <span onClick={handleDeleteClick}><MdOutlineDelete size={30} color='red'/></span>
        </section>
    </div>
  )
}

export default DashboardListingCard