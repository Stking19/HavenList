import React from 'react'
import './propertydetails.css'
import { FaAnchor, FaSink,FaAngleRight } from "react-icons/fa6";

const PropertyDetails = () => {
  return (
    <>
    <div className='propertyDetailMain'>
      <p>cool apartment for you and family</p>
      <div className='propertyDetailImageWrapper'>
        <span className='propertyDetailImageMain'>
          <img src="../../../../public/be948c0b628fbdd1e0788117fb2000a1.jpg" alt="" />
        </span>
        <div className='subImageWrapper'>
          <section className='subImage1'>
            <span>
              <img src="../../../../public/f1e72efd74f50f435fd26aac95593895 (1).jpg" alt="" />
            </span>
            <span>
              <img src="../../../../public/251d5a5fc1a8245fe0a865f05388083b.jpg" alt="" />
            </span>
          </section>

          <section className='subImage2'>
            <span>
              <img src="../../../../public/02959aaf05749951f238b1cbc0edcc31.jpg" alt="" />
            </span>
            <span>
              <img src="../../../../public/f217c589f3dc03cf9e6018c073eb242c.jpg" alt="" />
            </span>
          </section>
        </div>
      </div>
      <nav>
        <h3>2 Bedroom Flat in 6th Avenue Festac,</h3>
        <h3>festac,Lagos</h3>
        <p>2 Bedrooms . 2 Bathroom . 3 Toilets</p>
      </nav>
      <p>Hosted by HavenList Homes</p>
      <span>
        <h3>About this place</h3>

        <p>Large stylish well en-suited 3 bedrooms, with a very comfortable sitting parlour<br />
          space and a very spacious car park. Wonderful dining area for your family. Top<br />
          italian styled tiles and spacious wardrobes. Kitchen is well arranged with shelf,<br />
          and a refrigerator angle. Hot water for your warm bath.</p>
      </span>

      <div className='propertyDetailAmenitiesWrapper'>
        <h3>Amenities</h3>
        <div className='propertyDetailAmeneties'>
          <section>
            <span><FaAnchor /><p>Chandelier</p></span>
            <span> <FaSink /><p>Dishwasher</p></span>
            <span><FaAnchor /><p>Kitchen</p></span>
            <span> <FaAnchor /><p>Pop Ceiling</p></span>
            <span><FaAnchor /><p>Tiled Floor</p></span>
          </section>

          <section>
            <span><FaAnchor /><p>Dining Area</p></span>
            <span><FaAnchor /><p>Hot Water</p></span>
            <span><FaAnchor /><p>Kitchen Shelf</p></span>
            <span><FaAnchor /><p>Pre-paid Meter</p></span>
            <span><FaAnchor /><p>Wardrobe</p></span>
          </section>
        </div>
      </div>


      <div className='propertyDetailSafeTips'>
        <h3>Safety Tips</h3>
        <li>Do not make any inspection fee without seeing the agent or Landlord.</li>
        <li>Only pay Rental fee, Sales fee or any upfront payment after you verify the Landlord.</li>
        <li>Ensure you meet the Agent in an open location.</li>
        <li>The Agent does not represent HevanList and HevanList is not liable for any monetary transaction between you and the Agent.</li>
      </div>

      <h2 style={{ textDecoration: 'underline' }}>Terms Of use</h2>
    </div>
    <div className='modalpropertyDetailCard'>
      <h3>N 2,000,000 <small>per Annum</small></h3>
      <div className='propertyDetailCardDate'>
        <div className='dateWrapper'>
          <span className='propertyDetailCheckIn'>
            <p>CHECK-IN</p>
            <p>4/17/2025</p>
          </span>

          <span className='propertyDetailCheckOut'>
            <p>CHECK-out</p>
            <p>4/17/2025</p>
          </span>
        </div>
        <section className='propertyDetailCheckOutOption'>
        <span>
        <p>CHECK-out</p>
        <p>4/17/2025</p>
        </span>
        <FaAngleRight/>
        </section>
      </div>
      <button className='propertyDetailRentBtn'>Rent</button>
      <p>You won’t be charged extra</p>
      <div className='propertyDetailFeeNot'>
        <span>
          <h3>No agent fee</h3>
          <p>N0.00</p>
        </span>

        <span>
          <h3>No service fee</h3>
          <p>N0.00</p>
        </span>
      </div>
      <span className='propertyDetailRentTotal'>
        <h3>Total before taxes</h3>
        <p>N 2,000,000.00</p>
      </span>
    </div>
  </>
  )
}

export default PropertyDetails