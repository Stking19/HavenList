import React from 'react'
import './listingCard.css'
import { LiaToiletSolid } from "react-icons/lia";
import { GiBathtub } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";

const ListingCard = () => {
  return (
    <div className='listingCardMain'>
        <div className='listingCardContentHolder'>
           <span className='listingPropertyImage'>
            <img src="../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg" alt="" />
           </span>
           <div className='listingPropertyDetails'>
            <h2 style={{color:'blue'}}>2 Bedroom Flat For Rent</h2>
            <p>6th Avenue Amowo-Odofin, Festac, Lagos.</p>
            <p> Well gated with up to six cars parking space.</p>
           <h2 style={{color:'blue',display:'flex',alignItems:'center'}}>N2M <small style={{color:'black',fontSize:'12px'}}>per annum</small></h2>
           </div>
        </div>
        <section className='listingFooter'>
          <div className='listingFooterContent'> <IoIosBed size={20}/> 2 bedroom</div>
          <div className='listingFooterContent'> <GiBathtub size={20}/> 2 bathroom</div>
          <span> <LiaToiletSolid size={20}/> 3 toilet</span>
        </section>
    </div>
  )
}

export default ListingCard