import React from 'react'
import './listingCard.css'
import { LiaToiletSolid } from "react-icons/lia";
import { GiBathtub } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { useNavigate } from 'react-router';
import Listing from '../../pages/Arinze/listing/Listing';

const ListingCard = ({items}) => {



  const navigate = useNavigate()
  
  return (
    <div className='listingCardMain'>
          <div  className='listingCardContentHolder' onClick={()=> navigate('/propertydetails')}>
          <span className='listingPropertyImage'>
           <img src={items.image} alt="" />
          </span>
          <div className='listingPropertyDetails'>
           <h2 style={{color:'blue'}}>{items.title}</h2>
           <p>{items.address}</p>
           <p>{items.description}</p>
          <h2 style={{color:'blue',display:'flex',alignItems:'center'}}>{items.price}<small style={{color:'black',fontSize:'12px'}}>{items.frequency}</small></h2>
          </div>
       </div>
        <section className='listingFooter'>
          <div className='listingFooterContent'> <IoIosBed size={20}/> 2 bedroom</div>
          <div className='listingFooterContent'> <GiBathtub size={20}/> 2 bathroom</div>
          <span ><LiaToiletSolid size={20}/> 3 toilet</span>
        </section>
    </div>
  )
}

export default ListingCard