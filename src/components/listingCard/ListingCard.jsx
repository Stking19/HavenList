import React from 'react'
import './listingCard.css'
import { LiaToiletSolid } from "react-icons/lia";
import { GiBathtub } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";

const ListingCard = () => {


  const listings = [
    {
      id: 1,
      title: "2 Bedroom Flat For Rent",
      address: "6th Avenue Amowo-Odofin, Festac, Lagos.",
      description: "Well gated with up to six cars parking space.",
      price: "N2M",
      frequency: "per annum",
      image: "IMG/be948c0b628fbdd1e0788117fb2000a1.jpg"
    },
    // {
    //   id: 2,
    //   title: "3 Bedroom Bungalow For Rent",
    //   address: "Ikate, Lekki Phase 1, Lagos.",
    //   description: "Fully detached with a private compound.",
    //   price: "N3.5M",
    //   frequency: "per annum",
    //   image: "../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg"
    // },
    // {
    //   id: 3,
    //   title: "Mini Flat For Rent",
    //   address: "Ogba, Ikeja, Lagos.",
    //   description: "Compact and affordable for young professionals.",
    //   price: "N800K",
    //   frequency: "per annum",
    //   image:"../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg"
    // },
    // {
    //   id: 4,
    //   title: "Luxury 4 Bedroom Duplex",
    //   address: "Chevron Drive, Lekki, Lagos.",
    //   description: "Comes with BQ, modern kitchen, and swimming pool.",
    //   price: "N7M",
    //   frequency: "per annum",
    //   image: "../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg"
    // },
    // {
    //   id: 5,
    //   title: "1 Bedroom Apartment",
    //   address: "Yaba, Lagos.",
    //   description: "Clean and close to major tech hubs.",
    //   price: "N1.2M",
    //   frequency: "per annum",
    //   image: "../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg"
    // },
    // {
    //   id: 6,
    //   title: "Studio Apartment",
    //   address: "Surulere, Lagos.",
    //   description: "Perfect for students or short-term stay.",
    //   price: "N600K",
    //   frequency: "per annum",
    //   image: "../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg"
    // },
    // {
    //   id: 7,
    //   title: "2 Bedroom Flat with Balcony",
    //   address: "Ajah, Lagos.",
    //   description: "Spacious rooms and 24/7 power supply.",
    //   price: "N1.8M",
    //   frequency: "per annum",
    //   image: "../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg"
    // },
    // {
    //   id: 8,
    //   title: "Self-Contain Apartment",
    //   address: "Iyana Ipaja, Lagos.",
    //   description: "Affordable and secure environment.",
    //   price: "N500K",
    //   frequency: "per annum",
    //   image: "../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg"
    // },
    // {
    //   id: 9,
    //   title: "3 Bedroom Flat with POP",
    //   address: "Gbagada, Lagos.",
    //   description: "Modern finish with good road network.",
    //   price: "N2.7M",
    //   frequency: "per annum",
    //   image: "../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg"
    // }
  ];
  
  return (
    <div className='listingCardMain'>
      {
        listings.map((items,index)=>(
          <div key={index} className='listingCardContentHolder'>
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
        ))
      }
        <section className='listingFooter'>
          <div className='listingFooterContent'> <IoIosBed size={20}/> 2 bedroom</div>
          <div className='listingFooterContent'> <GiBathtub size={20}/> 2 bathroom</div>
          <span> <LiaToiletSolid size={20}/> 3 toilet</span>
        </section>
    </div>
  )
}

export default ListingCard