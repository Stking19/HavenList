import React from 'react'
import './listingCard.css'
import { LiaToiletSolid } from "react-icons/lia";
import { GiBathtub } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { useNavigate } from 'react-router';

const ListingCard = ({items}) => {
  const navigate = useNavigate()

  const navDetails =()=>{
     navigate(`/propertyDetails/${items?.id}`)
  } 
  // console.log(items?.id)

  return (
    <div className='listingCardMain'>
          <div  className='listingCardContentHolder' onClick={navDetails}>
          <span className='listingPropertyImage'>
           <img src={items?.listingImage?.[0]?.imageUrl} alt="" />
          </span>
          <div className='listingPropertyDetails'>
           <h2 style={{color:'#2F80ED', fontSize: "15px"}}>{items?.title}</h2>
           <p>{items?.street} {items?.area} {items.state}</p>
           <p>{items?.description}</p>
          <h2 style={{color:'#2F80ED',display:'flex',alignItems:'center', gap: "5px", fontSize: "15px"}}>N{items?.price}<small style={{color:'black',fontSize:'12px'}}>{items.frequency}</small></h2>
          </div>
       </div>
        <section className='listingFooter'>
          <div className='listingFooterContent'> <IoIosBed size={20}/> {items?.bedrooms} Bedrooms</div>
          <div className='listingFooterContent'> <GiBathtub size={20}/>{items?.bathrooms} Bathrooms</div>
          <span ><LiaToiletSolid size={20}/>{items?.toilets} Toilets</span>
        </section>
    </div>
  )
}

export default ListingCard