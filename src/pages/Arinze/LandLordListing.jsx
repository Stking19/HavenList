import React from 'react'
import './landLordListig.css'
import ListingCard from '../../components/listingCard/ListingCard'

const LandLordListing = () => {

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
    {
      id: 2,
      title: "3 Bedroom Bungalow For Rent",
      address: "Ikate, Lekki Phase 1, Lagos.",
      description: "Fully detached with a private compound.",
      price: "N3.5M",
      frequency: "per annum",
      image: "IMG/be948c0b628fbdd1e0788117fb2000a1.jpg"
    },
    {
      id: 3,
      title: "Mini Flat For Rent",
      address: "Ogba, Ikeja, Lagos.",
      description: "Compact and affordable for young professionals.",
      price: "N800K",
      frequency: "per annum",
      image:"IMG/be948c0b628fbdd1e0788117fb2000a1.jpg"
    },
    {
      id: 4,
      title: "Luxury 4 Bedroom Duplex",
      address: "Chevron Drive, Lekki, Lagos.",
      description: "Comes with BQ, modern kitchen, and swimming pool.",
      price: "N7M",
      frequency: "per annum",
      image: "IMG/be948c0b628fbdd1e0788117fb2000a1.jpg"
    },
    {
      id: 5,
      title: "1 Bedroom Apartment",
      address: "Yaba, Lagos.",
      description: "Clean and close to major tech hubs.",
      price: "N1.2M",
      frequency: "per annum",
      image: "IMG/be948c0b628fbdd1e0788117fb2000a1.jpg"
    },
    {
      id: 6,
      title: "Studio Apartment",
      address: "Surulere, Lagos.",
      description: "Perfect for students or short-term stay.",
      price: "N600K",
      frequency: "per annum",
      image: "IMG/be948c0b628fbdd1e0788117fb2000a1.jpg"
    },
    {
      id: 7,
      title: "2 Bedroom Flat with Balcony",
      address: "Ajah, Lagos.",
      description: "Spacious rooms and 24/7 power supply.",
      price: "N1.8M",
      frequency: "per annum",
      image: "IMG/be948c0b628fbdd1e0788117fb2000a1.jpg"
    },
    {
      id: 8,
      title: "Self-Contain Apartment",
      address: "Iyana Ipaja, Lagos.",
      description: "Affordable and secure environment.",
      price: "N500K",
      frequency: "per annum",
      image: "IMG/be948c0b628fbdd1e0788117fb2000a1.jpg"
    },
    {
      id: 9,
      title: "3 Bedroom Flat with POP",
      address: "Gbagada, Lagos.",
      description: "Modern finish with good road network.",
      price: "N2.7M",
      frequency: "per annum",
      image: "IMG/be948c0b628fbdd1e0788117fb2000a1.jpg"
    }
  ];

  return (
    <div className='landLordListingMain'>
      <div className='landLordMainScreen'>
        <span className='textHeader'>
            <h3>My Listings</h3>
        </span>
        <div className='landlordListingHolder'>

           {
                 listings.map((item,index)=>(
                   <ListingCard key={index} items={item} />
                 ))
               }

        </div>
      </div>
    </div>
  )
}

export default LandLordListing
