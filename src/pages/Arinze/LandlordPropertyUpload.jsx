import React from 'react'
import './LandlordPropertyUpload.css'

const LandlordPropertyUpload = () => {
  return (
    <div className='LandlordPropertyUploadMain'>
      <div className='asideDashBord'>
      </div>
      <div className='landLordUploadMainScreen'>
        <section className='landLordUploadDetail'>
          <h2>Tell us more about this listing</h2>
          <p>If having any issues during your listing creation, please contact our support team.</p>

          <div className='propertyDetailsUpload'>
            <h3>Property Details</h3>
            <div className='line'></div>
            <span className='uploadTitle'>
              <h3>Title</h3>
              <input type="text" placeholder='e.g newly built 3 bedroom flat in a serene neighbourhood' />
            </span>
            <section className='numberOfBedsOpt'>
              <span>
                <h3>BedRooms</h3>
                <option value="">BedRooms</option>
              </span>

              <span>
                <h3>BathRooms</h3>
                <option value="">BathRooms</option>
              </span>

              <span>
                <h3>Toilet</h3>
                <option value="">Toilet</option>
              </span>
            </section>
          </div>

          <div className='addressDetailUpload'>
            <h3>Address Details</h3>
            <div className='line'></div>

            <section className='addressDetailsInputs'>

              <div className='addressDualInput'>
                <span>
                  <h3>Street</h3>
                  <input type="text" placeholder='Street' />
                </span>

                <span>
                  <h3>Area</h3>
                  <input type="text" placeholder='Area' />
                </span>
              </div>

              <span>
                <h3>State</h3>
                <input type="text" placeholder='State' />
              </span>

            </section>
          </div>

          <div className='paymentDtailUploads'>
            <h3>Payment Details</h3>
            <div className='line'></div>

            <section className='paymentDetailInputs'>

              <div className='paymentDualInput'>
                <span>
                  <h3>Price</h3>
                  <input type="text" placeholder='Price' />
                </span>

                <span>
                  <h3>Year</h3>
                  <input type="text" placeholder='No of years' />
                </span>
              </div>

            </section>
          </div>

          <div className='imageDetailUpload'> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
            <button className='propertyUploadBtn'>Upload</button>
        </section>
      </div>
    </div>
  )
}

export default LandlordPropertyUpload
