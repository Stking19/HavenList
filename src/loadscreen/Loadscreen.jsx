import React from 'react'
import './loadscreen.css'
import { BounceLoader } from 'react-spinners'

const Loadscreen = () => {
  return (
    <div className='load'><BounceLoader color='rgb(48, 48, 167)'/></div>
  )
}

export default Loadscreen