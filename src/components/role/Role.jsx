import React from 'react'
import './role.css'
import { useNavigate } from 'react-router'
import { IoCaretBackCircleSharp } from "react-icons/io5";

const Role = () => {
    const navigate = useNavigate()
  return (
    <div className='role'>
        <p className="goback" onClick={() => navigate(-1)}><IoCaretBackCircleSharp /></p>
        <h2>Select Who You Are <br /> Signing As</h2>
        <button onClick={() => navigate('/sign-in/landlord')}>Landlord</button>
        <button onClick={() => navigate('/sign-in/tenant')}>Tenant</button>
    </div>
  )
}

export default Role