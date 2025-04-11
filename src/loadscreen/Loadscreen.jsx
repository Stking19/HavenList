import React from 'react'
import './loadscreen.css'
import { BounceLoader } from 'react-spinners'

const Loadscreen = () => {
  return (
    <div className='load'><BounceLoader color='skyblue'/></div>
  )
}

export default Loadscreen